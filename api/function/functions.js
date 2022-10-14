'use strict'
const axios = require('axios')
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()
let urlEnv = process.env.url
let url = ''
if (urlEnv.includes('prod')) {
  url = 'https://fyprsa3nv8.execute-api.ap-southeast-1.amazonaws.com/prod/'
}else if(urlEnv.includes('staging')){
  url = 'https://tx8p46dsb4.execute-api.ap-southeast-1.amazonaws.com/dev/'
}else{
  url = 'https://tx8p46dsb4.execute-api.ap-southeast-1.amazonaws.com/dev/'
}
const invoiceUrl = url + "invoice/institute/";
const companyInfo = async (instituteId) => {
  const table = process.env.item_table
  const params = {
    ExpressionAttributeValues: {
      ':sk': instituteId,
      ':pk': instituteId
    },
    KeyConditionExpression: 'sk = :sk and pk = :pk',
    TableName: table
  }
  try {
    const data = await dynamoDb.query(params).promise()
    console.log('data instituteId', data)
    return data.Items.map(item => {
      return {
        id: item.pk,
        name: item.name ? item.name : '',
        customerFacingEmail: item.customerFacingEmail ? item.customerFacingEmail : '',
        timezone: item.timezone ? item.timezone : '',
        banhjiId: item.banhjiId ? item.banhjiId : '',
        vatNumber: item.vatNumber ? item.vatNumber : '',
        email: item.ownerEmail ? item.ownerEmail : '',
        phone: item.phone ? item.phone : '',
        fiscalDate: item.fiscalDate ? item.fiscalDate : {},
        baseCurrency: item.baseCurrency ? item.baseCurrency : {},
        reportingCurrency: item.reportingCurrency ? item.reportingCurrency : {},
        closingDate: item.closingDate ? item.closingDate : '',
        dateFormat: item.dateFormat ? item.dateFormat : 'dd-MM-yyyy'
      }
    })
  } catch (error) {
    return error
  }
}
const transactionCurrency = async (code, txnDate, instituteId) => {
  const table = process.env.item_table_setting
  const params = {
    ExpressionAttributeValues: {
      ':sk': instituteId,
      ':pk': 'cur-',
      ':type': 'txn-c',
      ':code': code,
      ':effectiveDate': new Date(txnDate).toISOString().substring(0, 10)
    },
    ExpressionAttributeNames: {
      '#type': 'type',
      '#effectiveDate': 'effectiveDate',
      '#code': 'code'
    },
    IndexName: 'GSI1',
    KeyConditionExpression: 'sk = :sk and begins_with(pk, :pk)',
    FilterExpression: '#type = :type and #code =:code and #effectiveDate <= :effectiveDate',
    TableName: table
  }
  try {
    let items = []
    const results = []
    let sortedData = []

    do {
      items = await dynamoDb.query(params).promise()
      items.Items.forEach(item => {
        results.push({
          id: item.pk,
          code: item.code ? item.code : '',
          name: item.name ? item.name : '',
          symbol: item.symbol ? item.symbol : '',
          symbolNative: item.symbolNative ? item.symbolNative : '',
          rate: item.rate ? item.rate : 1,
          source: item.source ? item.source : '',
          method: item.method ? item.method : '',
          createdAt: item.createdAt ? item.createdAt : '',
          effectiveDate: item.effectiveDate ? item.effectiveDate : ''
        })
      })
      params.ExclusiveStartKey = items.LastEvaluatedKey
    } while (typeof items.LastEvaluatedKey !== 'undefined')
    sortedData = results.sort(function (a, b) {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt)
    })
    return sortedData[0]
  } catch (error) {
    return {}
  }
}
const invoiceCreate = async (data, instituteId) => {
  console.log('data', data, instituteId)
  console.log('invoiceUrl', invoiceUrl)
  const result = await axios({
    url: invoiceUrl+ instituteId + '/add',
    method: 'post',
    data: data
  })
  return  result
}

module.exports = {
  companyInfo,
  transactionCurrency,
  invoiceCreate
}
