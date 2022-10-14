'use strict'

function InvoiceModel(Invoice){
    this.id                 = Invoice.id || ''
    this.uuid               = Invoice.uuid || ''
    this.type               = Invoice.type || ''
    this.journal_uuid       = Invoice.journal_uuid || ''
    this.number             = Invoice.number || ''
    this.referenceNo        = Invoice.referenceNo || ''
    this.abbr               = Invoice.abbr || ''
    this.transactionDate    = Invoice.transactionDate || new Date().toISOString().substr(0, 10)
    this.transactionDateTZ  = Invoice.transactionDateTZ || new Date().toJSON()
    this.dueDate            = Invoice.dueDate || new Date().toISOString().substr(0, 10)
    this.monthOf            = Invoice.monthOf || new Date().toISOString().substr(0, 10)
    this.customer           = Invoice.customer || {}
    this.transactionType    = Invoice.transactionType || {}
    this.paymentTerm        = Invoice.paymentTerm || {}
    this.approvedTerm       = Invoice.approvedTerm || {}
    this.discountPromotion  = Invoice.discountPromotion || {}
    this.receivableAcc      = Invoice.receivableAcc || {}
    this.currency           = Invoice.currency || {}
    this.baseCurrency       = Invoice.baseCurrency || {}
    this.rate               = Invoice.rate || 1
    this.txnRate            = Invoice.txnRate || 1
    this.taxExchangeRate    = Invoice.taxExchangeRate || {}
    this.exchangeRate       = Invoice.exchangeRate || {}
    this.exchangeAmount     = Invoice.exchangeAmount || 0
    this.priceLevel         = Invoice.priceLevel || {}
    this.itemLines          = Invoice.itemLines || []
    this.segment            = Invoice.segment || {}
    this.location           = Invoice.location || {}
    this.project            = Invoice.project || {}
    this.saleChannel        = Invoice.saleChannel || {}
    this.employee           = Invoice.employee || {}
    this.billingAddress     = Invoice.billingAddress || {}
    this.deliveryAddress    = Invoice.deliveryAddress || {}
    this.deliveryDateTime   = Invoice.deliveryDateTime || new Date().toISOString().substr(0, 10)
    this.transactionNote    = Invoice.transactionNote || ''
    this.journalNote        = Invoice.journalNote || ''
    this.subTotal           = Invoice.subTotal || 0
    this.exchangeSubTotal   = Invoice.exchangeSubTotal || 0
    this.total              = Invoice.total || 0
    this.exchangeTotal      = Invoice.exchangeTotal || 0
    this.discountTotal      = Invoice.discountTotal || 0
    this.otherChargeTotal   = Invoice.otherChargeTotal || 0
    this.specificDiscountTotal = Invoice.specificDiscountTotal || 0
    this.deliveryFee        = Invoice.deliveryFee || 0
    this.totalTaxAmount     = Invoice.totalTaxAmount || 0
    this.depositAmount      = Invoice.depositAmount || 0
    this.depositDeduction   = Invoice.depositDeduction || 0
    this.exchangeDepositDeduction = Invoice.exchangeDepositDeduction || 0
    this.remainingAmount    = Invoice.remainingAmount || 0
    this.amountDue          = Invoice.amountDue || 0
    this.currentBalance     = Invoice.currentBalance || 0
    this.balance            = Invoice.balance || 0
    this.creditLimit        = Invoice.creditLimit || 0
    this.saveOption         = Invoice.saveOption || 1
    this.status             = Invoice.status || 1
    this.approvedBy         = Invoice.approvedBy || {}
    this.rejectedBy         = Invoice.rejectedBy || {}
    this.formTemplate       = Invoice.formTemplate || {}
    this.specificDiscountItem = Invoice.specificDiscountItem || {}
    this.otherCharge        = Invoice.otherCharge || []
    this.otherChargeLine    = Invoice.otherChargeLine || []
    this.paymentOptionOnline = Invoice.paymentOptionOnline || {}
    this.paymentOptionKHQR  = Invoice.paymentOptionKHQR || {}
    this.paymentOptionWBMobile = Invoice.paymentOptionWBMobile || {}
    this.paymentOptionBankTransfer = Invoice.paymentOptionBankTransfer || {}
    this.lateFee            = Invoice.lateFee || {}
    this.paymentCode        = Invoice.paymentCode || ''
    this.publicLink         = Invoice.publicLink || ''
    this.taxListTotal       = Invoice.taxListTotal || {}
    this.dateFormat         = Invoice.dateFormat || ''
    this.createdAt          = Invoice.createdAt || new Date()
    this.saveSend           = Invoice.saveSend || false
    this.deleted            = Invoice.deleted || 0
    this.dr                 = Invoice.dr || 0
    this.cr                 = Invoice.cr || 0
    this.jRaw               = Invoice.jRaw || 0
    this.paymentScheme      = Invoice.paymentScheme ||  {method: {}, number: 1}
    this.sourceTransaction  = Invoice.sourceTransaction || []
    this.attachment         = Invoice.attachment || {}
    this.itemSubtotal       = Invoice.itemSubtotal || 0
    this.serviceSubtotal    = Invoice.serviceSubtotal || 0
    this.exchangeItemSubtotal = Invoice.exchangeItemSubtotal || 0
    this.exchangeServiceSubtotal = Invoice.exchangeServiceSubtotal || 0
    this.txnItmSubtotal     = Invoice.txnItmSubtotal || 0
    this.exchangeTxnItmSubtotal = Invoice.exchangeTxnItmSubtotal || 0
    this.itemDiscount       = Invoice.itemDiscount || 0
    this.exchangeItemDiscount = Invoice.exchangeItemDiscount || 0
    this.serviceDiscount    = Invoice.serviceDiscount || 0
    this.exchangeServiceDiscount = Invoice.exchangeServiceDiscount || 0
    this.txnItmDiscount     = Invoice.txnItmDiscount || 0
    this.exchangeTxnItmDiscount = Invoice.exchangeTxnItmDiscount || 0
    this.billPayment        = Invoice.billPayment || {}
    this.qrPayment          = Invoice.qrPayment || {}
    this.bankTransfer       = Invoice.bankTransfer || {}
    this.cashPayment        = Invoice.cashPayment || {}
    this.refFrom            = Invoice.refFrom || []
    this.refTo              = Invoice.refTo || []
    this.saleTaxDetail      = Invoice.saleTaxDetail || []
    this.cashBasicIncomeAcc = Invoice.cashBasicIncomeAcc || []
    this.OtherChargeAmount  = Invoice.OtherChargeAmount || 0
    this.isJournal          = Invoice.isJournal || 1
    this.journalStatus      = Invoice.journalStatus || 0
    this.batchNumber        = Invoice.batchNumber || ''
    this.actionType         = Invoice.actionType || 'new'
    this.isAutoGenerate     = Invoice.isAutoGenerate || 1
}
InvoiceModel.prototype.getId = function (){
    return this.id
}
InvoiceModel.prototype.setId = function (id) {
    this.id = id
}
InvoiceModel.prototype.getUUID = function () {
    return this.uuid
}
InvoiceModel.prototype.setUUID = function (uuid) {
    this.uuid = uuid
}
InvoiceModel.prototype.getType = function () {
    return this.type
}
InvoiceModel.prototype.setType = function (type) {
    this.type = type
}
InvoiceModel.prototype.getJournalUUID = function () {
    return this.journal_uuid
}
InvoiceModel.prototype.setJournalUUID = function (journal_uuid) {
    this.journal_uuid = journal_uuid
}
InvoiceModel.prototype.getNumber = function () {
    return this.number
}
InvoiceModel.prototype.setNumber = function (number) {
    this.number = number
}
InvoiceModel.prototype.getReferenceNo = function () {
    return this.referenceNo
}
InvoiceModel.prototype.setReferenceNo = function (referenceNo) {
    this.referenceNo = referenceNo
}
InvoiceModel.prototype.getAbbr = function () {
    return this.abbr
}
InvoiceModel.prototype.setAbbr = function (abbr) {
    this.abbr = abbr
}
InvoiceModel.prototype.getTransactionDate = function () {
    return this.transactionDate
}
InvoiceModel.prototype.setTransactionDate = function (transactionDate) {
    this.transactionDate = transactionDate
}
InvoiceModel.prototype.getTransactionDateTZ = function () {
    return this.transactionDateTZ
}
InvoiceModel.prototype.setTransactionDateTZ = function (transactionDateTZ) {
    this.transactionDateTZ = transactionDateTZ
}
InvoiceModel.prototype.getDueDate = function () {
    return this.dueDate
}
InvoiceModel.prototype.setDueDate = function (dueDate) {
    this.dueDate = dueDate
}
InvoiceModel.prototype.getMonthOf = function () {
    return this.monthOf
}
InvoiceModel.prototype.setMonthOf = function (monthOf) {
    this.monthOf = monthOf
}
InvoiceModel.prototype.getCustomer = function () {
    return this.customer
}
InvoiceModel.prototype.setCustomer = function (customer) {
    this.customer = customer
}
InvoiceModel.prototype.getTransactionType = function () {
    return this.transactionType
}
InvoiceModel.prototype.setTransactionType = function (transactionType) {
    this.transactionType = transactionType
}
InvoiceModel.prototype.getPaymentTerm = function () {
    return this.paymentTerm
}
InvoiceModel.prototype.setPaymentTerm = function (paymentTerm) {
    this.paymentTerm = paymentTerm
}
InvoiceModel.prototype.getApprovedTerm = function () {
    return this.approvedTerm
}
InvoiceModel.prototype.setApprovedTerm = function (approvedTerm) {
    this.approvedTerm = approvedTerm
}
InvoiceModel.prototype.getDiscountPromotion = function () {
    return this.discountPromotion
}
InvoiceModel.prototype.setDiscountPromotion = function (discountPromotion) {
    this.discountPromotion = discountPromotion
}
InvoiceModel.prototype.getReceivableAcc = function () {
    return this.receivableAcc
}
InvoiceModel.prototype.setReceivableAcc = function (receivableAcc) {
    this.receivableAcc = receivableAcc
}
InvoiceModel.prototype.getCurrency = function () {
    return this.currency
}
InvoiceModel.prototype.setCurrency = function (currency) {
    this.currency = currency
}
InvoiceModel.prototype.getBaseCurrency = function () {
    return this.baseCurrency
}
InvoiceModel.prototype.setBaseCurrency = function (baseCurrency) {
    this.baseCurrency = baseCurrency
}
InvoiceModel.prototype.getRate = function () {
    return this.rate
}
InvoiceModel.prototype.setRate = function (rate) {
    this.rate = rate
}
InvoiceModel.prototype.getTxnRate = function () {
    return this.txnRate
}
InvoiceModel.prototype.setTxnRate = function (txnRate) {
    this.txnRate = txnRate
}
InvoiceModel.prototype.getTaxExchangeRate = function () {
    return this.taxExchangeRate
}
InvoiceModel.prototype.setTaxExchangeRate = function (taxExchangeRate) {
    this.taxExchangeRate = taxExchangeRate
}
InvoiceModel.prototype.getExchangeRate = function () {
    return this.exchangeRate
}
InvoiceModel.prototype.setExchangeRate = function (exchangeRate) {
    this.exchangeRate = exchangeRate
}
InvoiceModel.prototype.getExchangeAmount = function () {
    return this.exchangeAmount
}
InvoiceModel.prototype.setExchangeAmount = function (exchangeAmount) {
    this.exchangeAmount = exchangeAmount
}
InvoiceModel.prototype.getPriceLevel = function () {
    return this.priceLevel
}
InvoiceModel.prototype.setPriceLevel = function (priceLevel) {
    this.priceLevel = priceLevel
}
InvoiceModel.prototype.getItemLines = function () {
    return this.itemLines
}
InvoiceModel.prototype.setItemLines = function (itemLines) {
    this.itemLines = itemLines
}
InvoiceModel.prototype.getSegment = function () {
    return this.segment
}
InvoiceModel.prototype.setSegment = function (segment) {
    this.segment = segment
}
InvoiceModel.prototype.getLocattion = function () {
    return this.location
}
InvoiceModel.prototype.setLocation = function (location) {
    this.location = location
}
InvoiceModel.prototype.getProject = function () {
    return this.project
}
InvoiceModel.prototype.setProject = function (project) {
    this.project = project
}
InvoiceModel.prototype.getSaleChannel = function () {
    return this.saleChannel
}
InvoiceModel.prototype.setSaleChannel = function (saleChannel) {
    this.saleChannel = saleChannel
}
InvoiceModel.prototype.getEmployee = function () {
    return this.employee
}
InvoiceModel.prototype.setEmployee = function (employee) {
    this.employee = employee
}
InvoiceModel.prototype.getBillingAddress = function () {
    return this.billingAddress
}
InvoiceModel.prototype.setBillingAddress = function (billingAddress) {
    this.billingAddress = billingAddress
}
InvoiceModel.prototype.getDeliveryAddress = function () {
    return this.deliveryAddress
}
InvoiceModel.prototype.setDeliveryAddress = function (deliveryAddress) {
    this.deliveryAddress = deliveryAddress
}
InvoiceModel.prototype.getDeliveryDateTime = function () {
    return this.deliveryDateTime
}
InvoiceModel.prototype.setDeliveryDateTime = function (deliveryDateTime) {
    this.deliveryDateTime = deliveryDateTime
}
InvoiceModel.prototype.getTransactionNote = function () {
    return this.transactionNote
}
InvoiceModel.prototype.setTransactionNote = function (transactionNote) {
    this.transactionNote = transactionNote
}
InvoiceModel.prototype.getJournalNote = function () {
    return this.journalNote
}
InvoiceModel.prototype.setJournalNote = function (journalNote) {
    this.journalNote = journalNote
}
InvoiceModel.prototype.getSubTotal = function () {
    return this.subTotal
}
InvoiceModel.prototype.setSubTotal = function (subTotal) {
    this.subTotal = subTotal
}
InvoiceModel.prototype.getExchangeSubTotal = function () {
    return this.exchangeSubTotal
}
InvoiceModel.prototype.setExchangeSubTotal = function (exchangeSubTotal) {
    this.exchangeSubTotal = exchangeSubTotal
}
InvoiceModel.prototype.getTotal = function () {
    return this.total
}
InvoiceModel.prototype.setTotal = function (total) {
    this.total = total
}
InvoiceModel.prototype.getExchangeTotal = function () {
    return this.exchangeTotal
}
InvoiceModel.prototype.setExchangeTotal = function (exchangeTotal) {
    this.exchangeTotal = exchangeTotal
}
InvoiceModel.prototype.getDiscountTotal = function () {
    return this.discountTotal
}
InvoiceModel.prototype.setDiscountTotal = function (discountTotal) {
    this.discountTotal = discountTotal
}
InvoiceModel.prototype.getOtherChargeTotal = function () {
    return this.otherChargeTotal
}
InvoiceModel.prototype.setOtherChargeTotal = function (otherChargeTotal) {
    this.otherChargeTotal = otherChargeTotal
}
InvoiceModel.prototype.getSpecificDiscountTotal = function () {
    return this.specificDiscountTotal
}
InvoiceModel.prototype.setSpecificDiscountTotal = function (specificDiscountTotal) {
    this.specificDiscountTotal = specificDiscountTotal
}
InvoiceModel.prototype.getDeliveryFee = function () {
    return this.deliveryFee
}
InvoiceModel.prototype.setDeliveryFee = function (deliveryFee) {
    this.deliveryFee = deliveryFee
}
InvoiceModel.prototype.getTotalTaxAmount = function () {
    return this.totalTaxAmount
}
InvoiceModel.prototype.setTotalTaxAmount = function (totalTaxAmount) {
    this.totalTaxAmount = totalTaxAmount
}
InvoiceModel.prototype.getDepositAmount = function () {
    return this.depositAmount
}
InvoiceModel.prototype.setDepositAmount = function (depositAmount) {
    this.depositAmount = depositAmount
}
InvoiceModel.prototype.getDepositDeduction = function () {
    return this.depositDeduction
}
InvoiceModel.prototype.setDepositDeduction = function (depositDeduction) {
    this.depositDeduction = depositDeduction
}
InvoiceModel.prototype.getExchangeDepositDeduction = function () {
    return this.exchangeDepositDeduction
}
InvoiceModel.prototype.setExchangeDepositDeduction = function (exchangeDepositDeduction) {
    this.exchangeDepositDeduction = exchangeDepositDeduction
}
InvoiceModel.prototype.getRemainingAmount = function () {
    return this.remainingAmount
}
InvoiceModel.prototype.setRemainingAmount = function (remainingAmount) {
    this.remainingAmount = remainingAmount
}
InvoiceModel.prototype.getAmountDue = function () {
    return this.amountDue
}
InvoiceModel.prototype.setAmountDue = function (amountDue) {
    this.amountDue = amountDue
}
InvoiceModel.prototype.getCurrentBalance = function () {
    return this.currentBalance
}
InvoiceModel.prototype.setCurrentBalance = function (currentBalance) {
    this.currentBalance = currentBalance
}
InvoiceModel.prototype.getBalance = function () {
    return this.balance
}
InvoiceModel.prototype.setBalance = function (balance) {
    this.balance = balance
}
InvoiceModel.prototype.getCreditLimit = function () {
    return this.creditLimit
}
InvoiceModel.prototype.setCreditLimit = function (creditLimit) {
    this.creditLimit = creditLimit
}
InvoiceModel.prototype.getSaveOption = function () {
    return this.saveOption
}
InvoiceModel.prototype.setSaveOption = function (saveOption) {
    this.saveOption = saveOption
}
InvoiceModel.prototype.getStatus = function () {
    return this.status
}
InvoiceModel.prototype.setStatus = function (status) {
    this.status = status
}
InvoiceModel.prototype.getapprovedBy = function () {
    return this.ApprovedBy
}
InvoiceModel.prototype.setApprovedBy = function (approvedBy) {
    this.approvedBy = approvedBy
}
InvoiceModel.prototype.getRejectedBy = function () {
    return this.rejectedBy
}
InvoiceModel.prototype.setRejectedBy = function (rejectedBy) {
    this.rejectedBy = rejectedBy
}
InvoiceModel.prototype.getFormTemplate = function () {
    return this.formTemplate
}
InvoiceModel.prototype.setFormTemplate = function (formTemplate) {
    this.formTemplate = formTemplate
}
InvoiceModel.prototype.getSpecificDiscountItem = function () {
    return this.specificDiscountItem
}
InvoiceModel.prototype.setSpecificDiscountItem = function (specificDiscountItem) {
    this.specificDiscountItem = specificDiscountItem
}
InvoiceModel.prototype.getOtherCharge = function () {
    return this.otherCharge
}
InvoiceModel.prototype.setOtherCharge = function (otherCharge) {
    this.otherCharge = otherCharge
}
InvoiceModel.prototype.getOtherChargeLine = function () {
    return this.otherChargeLine
}
InvoiceModel.prototype.setOtherChargeLine = function (otherChargeLine) {
    this.otherChargeLine = otherChargeLine
}
InvoiceModel.prototype.getOtherChargeAmount = function () {
    return this.otherChargeAmount
}
InvoiceModel.prototype.setOtherChargeAmount = function (otherChargeAmount) {
    this.otherChargeAmount = otherChargeAmount
}
InvoiceModel.prototype.getPaymentOptionOnline = function () {
    return this.paymentOptionOnline
}
InvoiceModel.prototype.setPaymentOptionOnline = function (paymentOptionOnline) {
    this.paymentOptionOnline = paymentOptionOnline
}
InvoiceModel.prototype.getPaymentOptionKHQR = function () {
    return this.paymentOptionKHQR
}
InvoiceModel.prototype.setPaymentOptionKHQR = function (paymentOptionKHQR) {
    this.paymentOptionKHQR = paymentOptionKHQR
}
InvoiceModel.prototype.getPaymentOptionWBMobile = function () {
    return this.paymentOptionWBMobile
}
InvoiceModel.prototype.setPaymentOptionWBMobile = function (paymentOptionWBMobile) {
    this.paymentOptionWBMobile = paymentOptionWBMobile
}
InvoiceModel.prototype.getPaymentOptionBankTransfer = function () {
    return this.paymentOptionBankTransfer
}
InvoiceModel.prototype.setPaymentOptionBankTransfer = function (paymentOptionBankTransfer) {
    this.paymentOptionBankTransfer = paymentOptionBankTransfer
}
InvoiceModel.prototype.getLateFee = function () {
    return this.lateFee
}
InvoiceModel.prototype.setLateFee = function (lateFee) {
    this.lateFee = lateFee
}
InvoiceModel.prototype.getPaymentCode = function () {
    return this.paymentCode
}
InvoiceModel.prototype.setPaymentCode = function (paymentCode) {
    this.paymentCode = paymentCode
}
InvoiceModel.prototype.getPublicLink = function () {
    return this.publicLink
}
InvoiceModel.prototype.setPublicLink = function (publicLink) {
    this.publicLink = publicLink
}
InvoiceModel.prototype.getTaxListTotal = function () {
    return this.taxListTotal
}
InvoiceModel.prototype.setTaxListTotal = function (taxListTotal) {
    this.taxListTotal = taxListTotal
}
InvoiceModel.prototype.getDateFormat = function () {
    return this.dateFormat
}
InvoiceModel.prototype.setDateFormat = function (dateFormat) {
    this.dateFormat = dateFormat
}
InvoiceModel.prototype.getCreatedAt = function () {
    return this.createdAt
}
InvoiceModel.prototype.setCreatedAt = function (createdAt) {
    this.createdAt = createdAt
}
InvoiceModel.prototype.getSaveSend = function () {
    return this.saveSend
}
InvoiceModel.prototype.setSaveSend = function (saveSend) {
    this.saveSend = saveSend
}
InvoiceModel.prototype.getDeleted = function () {
    return this.deleted
}
InvoiceModel.prototype.setDeleted = function (deleted) {
    this.deleted = deleted
}
InvoiceModel.prototype.getDr = function () {
    return this.dr
}
InvoiceModel.prototype.setDr = function (dr) {
    this.dr = dr
}
InvoiceModel.prototype.getCr = function () {
    return this.cr
}
InvoiceModel.prototype.setCr = function (cr) {
    this.cr = cr
}
InvoiceModel.prototype.getJRaw = function () {
    return this.jRaw
}
InvoiceModel.prototype.setJRaw = function (jRaw) {
    this.jRaw = jRaw
}
InvoiceModel.prototype.getPaymentScheme = function () {
    return this.paymentScheme
}
InvoiceModel.prototype.setPaymentScheme = function (paymentScheme) {
    this.paymentScheme = paymentScheme
}
InvoiceModel.prototype.getSourceTransaction = function () {
    return this.sourceTransaction
}
InvoiceModel.prototype.setSourceTransaction = function (sourceTransaction) {
    this.sourceTransaction = sourceTransaction
}
InvoiceModel.prototype.getAttachment = function () {
    return this.attachment
}
InvoiceModel.prototype.setAttachment = function (attachment) {
    this.attachment = attachment
}
InvoiceModel.prototype.getItemSubtotal = function () {
    return this.itemSubtotal
}
InvoiceModel.prototype.setItemSubtotal = function (itemSubtotal) {
    this.itemSubtotal = itemSubtotal
}
InvoiceModel.prototype.getServiceSubtotal = function () {
    return this.serviceSubtotal
}
InvoiceModel.prototype.setServiceSubtotal = function (serviceSubtotal) {
    this.serviceSubtotal = serviceSubtotal
}
InvoiceModel.prototype.getExchangeItemSubtotal = function () {
    return this.exchangeItemSubtotal
}
InvoiceModel.prototype.setExchangeItemSubtotal = function (exchangeItemSubtotal) {
    this.exchangeItemSubtotal = exchangeItemSubtotal
}
InvoiceModel.prototype.getExchangeServiceSubtotal = function () {
    return this.exchangeServiceSubtotal
}
InvoiceModel.prototype.setExchangeServiceSubtotal = function (exchangeServiceSubtotal) {
    this.exchangeServiceSubtotal = exchangeServiceSubtotal
}
InvoiceModel.prototype.getTxnItmSubtotal = function () {
    return this.txnItmSubtotal
}
InvoiceModel.prototype.setTxnItmSubtotal = function (txnItmSubtotal) {
    this.txnItmSubtotal = txnItmSubtotal
}
InvoiceModel.prototype.getExchangeTxnItmSubtotal = function () {
    return this.exchangeTxnItmSubtotal
}
InvoiceModel.prototype.setExchangeTxnItmSubtotal = function (exchangeTxnItmSubtotal) {
    this.exchangeTxnItmSubtotal = exchangeTxnItmSubtotal
}
InvoiceModel.prototype.getItemDiscount = function () {
    return this.itemDiscount
}
InvoiceModel.prototype.setItemDiscount = function (itemDiscount) {
    this.itemDiscount = itemDiscount
}
InvoiceModel.prototype.geTExchangeItemDiscount = function () {
    return this.itemDiscount
}
InvoiceModel.prototype.setExchangeItemDiscount = function (exchangeItemDiscount) {
    this.exchangeItemDiscount = exchangeItemDiscount
}
InvoiceModel.prototype.getServiceDiscount = function () {
    return this.serviceDiscount
}
InvoiceModel.prototype.setServiceDiscount = function (serviceDiscount) {
    this.serviceDiscount = serviceDiscount
}
InvoiceModel.prototype.getExchangeServiceDiscount = function () {
    return this.exchangeServiceDiscount
}
InvoiceModel.prototype.setExchangeServiceDiscount = function (exchangeServiceDiscount) {
    this.exchangeServiceDiscount = exchangeServiceDiscount
}
InvoiceModel.prototype.getTxnItmDiscount = function () {
    return this.txnItmDiscount
}
InvoiceModel.prototype.setTxnItmDiscount = function (txnItmDiscount) {
    this.txnItmDiscount = txnItmDiscount
}
InvoiceModel.prototype.getExchangeTxnItmDiscount = function () {
    return this.exchangeTxnItmDiscount
}
InvoiceModel.prototype.setExchangeTxnItmDiscount = function (exchangeTxnItmDiscount) {
    this.exchangeTxnItmDiscount = exchangeTxnItmDiscount
}
InvoiceModel.prototype.getBillPayment = function () {
    return this.billPayment
}
InvoiceModel.prototype.setBillPayment = function (billPayment) {
    this.billPayment = billPayment
}
InvoiceModel.prototype.getQrPayment = function () {
    return this.qrPayment
}
InvoiceModel.prototype.setQrPayment = function (qrPayment) {
    this.qrPayment = qrPayment
}
InvoiceModel.prototype.getBankTransfer = function () {
    return this.bankTransfer
}
InvoiceModel.prototype.setBankTransfer = function (bankTransfer) {
    this.bankTransfer = bankTransfer
}
InvoiceModel.prototype.getCashPayment = function () {
    return this.cashPayment
}
InvoiceModel.prototype.setCashPayment = function (cashPayment) {
    this.cashPayment = cashPayment
}
InvoiceModel.prototype.getRefFrom = function () {
    return this.refFrom
}
InvoiceModel.prototype.setRefFrom = function (refFrom) {
    this.refFrom = refFrom
}
InvoiceModel.prototype.getRefTo = function () {
    return this.refTo
}
InvoiceModel.prototype.setRefTo = function (refTo) {
    this.refTo = refTo
}
InvoiceModel.prototype.getSaleTaxDetail = function () {
    return this.saleTaxDetail
}
InvoiceModel.prototype.setSaleTaxDetail = function (saleTaxDetail) {
    this.saleTaxDetail = saleTaxDetail
}
InvoiceModel.prototype.getCashBasicIncomeAcc = function () {
    return this.cashBasicIncomeAcc
}
InvoiceModel.prototype.setCashBasicIncomeAcc = function (cashBasicIncomeAcc) {
    this.cashBasicIncomeAcc = cashBasicIncomeAcc
}
InvoiceModel.prototype.getIsJournal = function () {
    return this.isJournal
}
InvoiceModel.prototype.setIsJournal = function (isJournal) {
    this.isJournal = isJournal
}
InvoiceModel.prototype.getJournalStatus = function () {
    return this.journalStatus
}
InvoiceModel.prototype.setJournalStatus = function (journalStatus) {
    this.journalStatus = journalStatus
}
InvoiceModel.prototype.getBatchNumber = function () {
    return this.batchNumber
}
InvoiceModel.prototype.setBatchNumber = function (batchNumber) {
    this.batchNumber = batchNumber
}
InvoiceModel.prototype.getActionType = function () {
    return this.actionType
}
InvoiceModel.prototype.setActionType = function (actionType) {
    this.actionType = actionType
}
InvoiceModel.prototype.getIsAutoGenerate = function () {
    return this.isAutoGenerate
}
InvoiceModel.prototype.setIsAutoGenerate = function (isAutoGenerate) {
    this.isAutoGenerate = isAutoGenerate
}
InvoiceModel.prototype.equals = function (otherCat) {
    return otherCat.getId() === this.getId() &&
        otherCat.getUUID() === this.getUUID() &&
        otherCat.getType() === this.getType() &&
        otherCat.getJournalUUID() === this.getJournalUUID() &&
        otherCat.getNumber() === this.getNumber() &&
        otherCat.getReferenceNo() === this.getReferenceNo() &&
        otherCat.getAbbr() === this.getAbbr() &&
        otherCat.getTransactionDate() === this.getTransactionDate() &&
        otherCat.getTransactionDateTZ() === this.getTransactionDateTZ() &&
        otherCat.getDueDate() === this.getDueDate() &&
        otherCat.getMonthOf() === this.getMonthOf() &&
        otherCat.getCustomer() === this.getCustomer() &&
        otherCat.getTransactionType() === this.getTransactionType() &&
        otherCat.getPaymentTerm() === this.getPaymentTerm() &&
        otherCat.getApprovedTerm() === this.getApprovedTerm() &&
        otherCat.getDiscountPromotion() === this.getDiscountPromotion() &&
        otherCat.getReceivableAcc() === this.getReceivableAcc() &&
        otherCat.getCurrency() === this.getCurrency() &&
        otherCat.getBaseCurrency() === this.getBaseCurrency() &&
        otherCat.getRate() === this.getRate() &&
        otherCat.getTxnRate() === this.getTxnRate() &&
        otherCat.getTaxExchangeRate() === this.getTaxExchangeRate() &&
        otherCat.getExchangeRate() === this.getExchangeRate() &&
        otherCat.getExchangeAmount() === this.getExchangeAmount() &&
        otherCat.getPriceLevel() === this.getPriceLevel() &&
        otherCat.getItemLines() === this.getItemLines() &&
        otherCat.getSegment() === this.getSegment() &&
        otherCat.getLocattion() === this.getLocattion() &&
        otherCat.getProject() === this.getProject() &&
        otherCat.getSaleChannel() === this.getSaleChannel() &&
        otherCat.getEmployee() === this.getEmployee() &&
        otherCat.getBillingAddress() === this.getBillingAddress() &&
        otherCat.getDeliveryAddress() === this.getDeliveryAddress() &&
        otherCat.getDeliveryDateTime() === this.getDeliveryDateTime() &&
        otherCat.getTransactionNote() === this.getTransactionNote() &&
        otherCat.getJournalNote() === this.getJournalNote() &&
        otherCat.getSubTotal() === this.getSubTotal() &&
        otherCat.getExchangeSubTotal() === this.getExchangeSubTotal() &&
        otherCat.getTotal() === this.getTotal() &&
        otherCat.getExchangeTotal() === this.getExchangeTotal() &&
        otherCat.getDiscountTotal() === this.getDiscountTotal() &&
        otherCat.getOtherChargeTotal() === this.getOtherChargeTotal() &&
        otherCat.getSpecificDiscountTotal() === this.getSpecificDiscountTotal() &&
        otherCat.getDeliveryFee() === this.getDeliveryFeeZ() &&
        otherCat.getTotalTaxAmount() === this.getTotalTaxAmount() &&
        otherCat.getDepositAmount() === this.getDepositAmount() &&
        otherCat.getDepositDeduction() === this.getDepositDeduction() &&
        otherCat.getExchangeDepositDeduction() === this.getExchangeDepositDeduction() &&
        otherCat.getRemainingAmount() === this.getRemainingAmountZ() &&
        otherCat.getAmountDue() === this.getAmountDue() &&
        otherCat.getCurrentBalance() === this.getCurrentBalance() &&
        otherCat.getBalance() === this.getBalance() &&
        otherCat.getCreditLimit() === this.getCreditLimit() &&
        otherCat.getSaveOption() === this.getSaveOption() &&
        otherCat.getStatus() === this.getStatus() &&
        otherCat.getapprovedBy() === this.getapprovedBy() &&
        otherCat.getRejectedBy() === this.getRejectedBy() &&
        otherCat.getFormTemplate() === this.getFormTemplate() &&
        otherCat.getSpecificDiscountItem() === this.getSpecificDiscountItem() &&
        otherCat.getOtherCharge() === this.getOtherCharge() &&
        otherCat.getOtherChargeLine() === this.getOtherChargeLine() &&
        otherCat.getOtherChargeAmount() === this.getOtherChargeAmount() &&
        otherCat.getPaymentOptionOnline() === this.getPaymentOptionOnline() &&
        otherCat.getPaymentOptionKHQR() === this.getPaymentOptionKHQR() &&
        otherCat.getPaymentOptionWBMobile() === this.getPaymentOptionWBMobile() &&
        otherCat.getPaymentOptionBankTransfer() === this.getPaymentOptionBankTransfer() &&
        otherCat.getLateFee() === this.getLateFee() &&
        otherCat.getPaymentCode() === this.getPaymentCode() &&
        otherCat.getPublicLink() === this.getPublicLink() &&
        otherCat.getTaxListTotal() === this.getTaxListTotal() &&
        otherCat.getDateFormat() === this.getDateFormat() &&
        otherCat.getCreatedAt() === this.getCreatedAt() &&
        otherCat.getSaveSend() === this.getSaveSend() &&
        otherCat.getDeleted() === this.getDeleted() &&
        otherCat.getDr() === this.getDr() &&
        otherCat.getCr() === this.getCr() &&
        otherCat.getJRaw() === this.getJRaw() &&
        otherCat.getPaymentScheme() === this.getPaymentScheme() &&
        otherCat.getSourceTransaction() === this.getSourceTransaction() &&
        otherCat.getAttachment() === this.getAttachment() &&
        otherCat.getItemSubtotal() === this.getItemSubtotal() &&
        otherCat.getServiceSubtotal() === this.getServiceSubtotal() &&
        otherCat.getExchangeItemSubtotal() === this.getExchangeItemSubtotal() &&
        otherCat.getExchangeServiceSubtotal() === this.getExchangeServiceSubtotal() &&
        otherCat.getTxnItmSubtotal() === this.getTxnItmSubtotal() &&
        otherCat.getExchangeTxnItmSubtotal() === this.getExchangeTxnItmSubtotal() &&
        otherCat.getItemDiscount() === this.getItemDiscount() &&
        otherCat.geTExchangeItemDiscount() === this.geTExchangeItemDiscount() &&
        otherCat.getServiceDiscount() === this.getServiceDiscount() &&
        otherCat.getExchangeServiceDiscount() === this.getExchangeServiceDiscount() &&
        otherCat.getTxnItmDiscount() === this.getTxnItmDiscount() &&
        otherCat.getExchangeTxnItmDiscount() === this.getExchangeTxnItmDiscount() &&
        otherCat.getBillPayment() === this.getBillPayment() &&
        otherCat.getQrPayment() === this.getQrPayment() &&
        otherCat.getBankTransfer() === this.getBankTransfer() &&
        otherCat.getCashPayment() === this.getCashPayment() &&
        otherCat.getRefFrom() === this.getRefFrom() &&
        otherCat.getRefTo() === this.getRefTo() &&
        otherCat.getSaleTaxDetail() === this.getSaleTaxDetail() &&
        otherCat.getCashBasicIncomeAcc() === this.getCashBasicIncomeAcc() &&
        otherCat.getIsJournal() === this.getIsJournal() &&
        otherCat.getJournalStatus() === this.getJournalStatus() &&
        otherCat.getBatchNumber() === this.getBatchNumber() &&
        otherCat.getActionType() === this.getActionType() &&
        otherCat.getIsAutoGenerate() === this.getIsAutoGenerate() 
}
InvoiceModel.prototype.fill = function (newFields) {
  for (let field in newFields) {
    if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
      if (this[field] !== 'undefined') {
        this[field] = newFields[field]
      }
    }
  }
}
module.exports = InvoiceModel // Export the Invoice function as it is
