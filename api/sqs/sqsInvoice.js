'use strict'

const InvoiceModel = require('../model/InvoiceModel')
const {
  companyInfo,
  transactionCurrency,
  invoiceCreate
} = require('../function/functions');
module.exports.consumer = async (event) => {
  
  let records  = event.Records[0]
  let result_json = JSON.parse(records.body)
  console.log('1', result_json)
  let price_level = result_json.price_level || {}
  let currency = price_level.currency
  let instituteId = result_json.instituteId || ''
  const segment = result_json.segment || {}
  console.log('instituteId', result_json.instituteId)
  const companyIn = await companyInfo(instituteId)
  console.log('companyIn', companyIn)
  let baseCurrency = {}
  if (companyIn) {
    if (companyIn.length > 0) {
      baseCurrency = companyIn[0].baseCurrency
    }
  }
  let txnRate = 1
  let exchangeRate = {}
  let taxExchangeRate = {}
  let month_of = new Date(result_json.transactionDate).toISOString().substr(0, 7)
  const customer = result_json.customer
  if(baseCurrency.code !== currency.code){
    let curCode = 'USD'//currency.code
    const receiptDate = result_json.transactionDate || ''
    let currencyRate = await transactionCurrency(curCode, new Date(receiptDate), instituteId)
    txnRate = currencyRate.rate
    exchangeRate ={
      id: currencyRate.id,
      name: currencyRate.name,
      code: currencyRate.code,
      rate: txnRate,
      source: currencyRate.source,
      symbol: currencyRate.symbol
    }
    taxExchangeRate = {
      id: currencyRate.id,
      name: currencyRate.name,
      code: currencyRate.code,
      rate: txnRate,
      source: currencyRate.source,
      symbol: currencyRate.symbol
    }
  }else{
    exchangeRate = {
      id: currency.id,
      name: currency.name,
      code: currency.code,
      rate: txnRate,
      source: currency.source || '',
      symbol: currency.symbol
    }
    taxExchangeRate = {
      id: currency.id,
      name: currency.name,
      code: currency.code,
      rate: txnRate,
      source: currency.source || '',
      symbol: currency.symbol
    }
  }
  console.log('txnRate', txnRate)
  let jRawAccount = []
  let sharingRate = []
  let jRaw = []
  for (const itemL of result_json.itemLines) {
    let item = itemL.item || {}
    let account = item.incomeAcc
    sharingRate.push(...item.revenueSharingRates.map(sh =>{
      let seg = sh.segment
      return {
        accId:      account.id,
        uuid:       seg.id,
        id:         seg.id || '',
        name:       seg.name || '',
        code:       seg.code || '',
        amount:     itemL.amount || 0,
        segmentId:  segment.id,
        balance:    parseFloat(itemL.amount) * parseFloat(sh.percentage/100),
        shareRete:  sh.percentage || 0,
        typeAs:     'item'
      }
    }))
    jRawAccount.push({
      id: account.id,
      description: item.name,
      account: account,
      accountId: account.id,
      exchangeAmount: itemL.amount * txnRate * -1,
      amount: itemL.amount * -1,
      type: 'cr',
      typeAs: "item",
    });
    let vat_tax = itemL.vatTax || {}
    if(vat_tax.id){
      let accTa = vat_tax.account
      let formula = vat_tax.formula;
      let inAmt = parseFloat(itemL.amount);
      let nAmt = parseFloat(itemL.amount);
      let taxBase = parseFloat(vat_tax.taxBase) / 100;
      let rate = parseFloat(vat_tax.rate) / 100;
      let total = eval(formula);
      console.log('tax',inAmt, nAmt, taxBase, rate, formula, total);
      sharingRate.push(...item.revenueSharingRates.map(shVAT =>{
        let segVAT = shVAT.segment
        return {
          accId:      accTa.id,
          uuid:       segVAT.id,
          id:         segVAT.id || '',
          name:       segVAT.name || '',
          code:       segVAT.code || '',
          amount:     total || 0,
          segmentId:  segment.id,
          balance:    parseFloat(total) * parseFloat(shVAT.percentage/100),
          shareRete:  shVAT.percentage || 0,
          typeAs:     'tax'
        }
      }))
      jRawAccount.push({
        id: accTa.id,
        description: vat_tax.defaultTax,
        account: accTa,
        accountId: accTa.id,
        exchangeAmount: total * txnRate * -1,
        amount: total * -1,
        type: 'cr',
        typeAs: "tax",
      })
    }
  }
  let helper = {};
  let segmentShar = sharingRate.reduce(function(r, o) {
    let key = o.id + o.accId + o.typeAs
    if(!helper[key]) {
        helper[key] = Object.assign({}, o); // create a copy of o
        r.push(helper[key]);
    } else {
        helper[key].shareRete += o.shareRete;
        helper[key].amount += o.amount;
        helper[key].balance += o.balance;
    }
    return r;
  }, []);
  let removeDuplicate = []
  let map = new Map();
  for(const ja of jRawAccount){
    if(!map.has(ja.id)) {
      map.set(ja.id, true); // set any value to Map
      removeDuplicate.push(ja);
    }
  }
  for(const rem of removeDuplicate){
    const found = jRawAccount.filter((m) => m.id === rem.id);
    const segmetJ = segmentShar.filter(s => s.accId === rem.id && s.typeAs === rem.typeAs).map(se=>{
      let shareRete = (parseFloat(se.balance) /parseFloat(se.amount)) * 100
      return {
        uuid:       se.id,
        id:         se.id,
        name:       se.name,
        code:       se.code || '',
        amount:     se.balance || 0,
        segmentId:  segment.id,
        balance:    se.balance,
        shareRete:  shareRete || 0,
      }
    })
    let amount = 0;
    let xAmount = 0;
    for(const fou of found){
      amount  += parseFloat(fou.amount || 0)
      xAmount += parseFloat(fou.exchangeAmount || 0)
    }
    jRaw.push({
      id: rem.id,
      description: rem.description,
      account: rem.account,
      accountId: rem.accountId,
      exchangeAmount: xAmount,
      amount: amount,
      type: rem.type,
      typeAs: rem.typeAs,
      segmentId : segment.id,
      segments: segmetJ
    })
  }
  try{
    let revenueSharingRates = result_json.segmentShar.map(sh =>{
      return {
        uuid: sh.id,
        id:   sh.id,
        code: sh.code,
        name: sh.name,
        balance: sh.balance * txnRate,
        amount: sh.balance,
        shareRete: ((sh.balance / sh.amount) * 100) ,
        exchangeAmount: sh.balance * txnRate,
        currency_amount: [
          {
            code: currency.code,
            name: currency.name,
            amount: sh.balance * txnRate,
          }
        ]
      }
    })
    let accCus =  customer.receivableAcc
    jRaw.push({
      id: accCus.id,
      description: '',
      account: accCus,
      accountId: accCus.id,
      exchangeAmount: result_json.amount * txnRate,
      amount: result_json.amount,
      type: 'dr',
      typeAs: "ar",
      segmentId: segment.id,
      segments: revenueSharingRates
    })
    const Invoice = new InvoiceModel({
      customer:             customer,
      dueDate:              result_json.due_date,
      transactionType:      result_json.invoiceType,
      location:             result_json.location,
      priceLevel:           result_json.price_level,
      segment:              result_json.segment,
      amountDue:            result_json.amount,
      number:               result_json.invoice_number,
      currency:             price_level.currency,
      monthOf:              month_of,
      itemLines:            result_json.itemLines,
      revenueSharingRates:  revenueSharingRates,
      exchangeAmount:       result_json.amount * txnRate,
      exchangeRate:         exchangeRate,
      subTotal:             result_json.subTotal,
      remainingAmount:      result_json.amount,
      total:                result_json.amount,
      exchangeTotal:        result_json.amount * txnRate,
      exchangeSubTotal:     result_json.amount * txnRate,
      totalTaxAmount:       result_json.taxAmount,
      paymentTerm:          result_json.term,
      taxExchangeRate:      taxExchangeRate,
      type:                 "Invoice",
      txnRate:              txnRate,
      actionType:           "new",
      isAutoGenerate:       0,
      receivableAcc:        customer.receivableAcc,
      jRaw:                 jRaw
    })
    console.log('Invoice', Invoice)
    const res = await invoiceCreate(Invoice, instituteId)
    console.log('res', res)
    return {event}
  }catch (error) { 
    console.log('error', error)
    return {event}
  }
};