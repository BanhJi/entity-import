'use strict'

const AWS = require('aws-sdk')
const code = require('../../config/code.js')
const message = require('../../config/message.js')
const json = require('../../config/response.js')
// const dynamoDb = new AWS.DynamoDB.DocumentClient()
const URL = require('../../config/sqsURL')
const { SQS } = require("aws-sdk");
const sqs = new SQS();
module.exports.import = async (event) => {
    console.log('event', event.body)
    const data = JSON.parse(event.body)
    const instituteId = event.pathParameters.institute_id
    console.log('data', data)
    try {
        let  dInvoice = {
            transactionDate:    data.transactionDate,
            amount:             data.amount,
            subTotal:           data.subTotal,
            taxAmount:          data.taxAmount,
            customer:           data.customer,
            due_date:           data.due_date,
            instituteId:        instituteId,
            invoiceType:        data.invoiceType,
            invoice_number:     data.invoice_number,
            itemLines:          data.itemLines,
            location:           data.location,
            price_level:        data.price_level,
            segment:            data.segment,
            term:               data.term,
            segmentShar:        data.segmentShar
        }
        console.log('URL.sqs.AUTOMATE_SQS_BALANCE', URL.sqs.IMPORTINVOICE_SQS)
        await sqs.sendMessage({
            QueueUrl: URL.sqs.IMPORTINVOICE_SQS,
            MessageBody: JSON.stringify(dInvoice),
            MessageAttributes: {
                AttributeName: {
                StringValue: "Attribute Value",
                DataType: "String",
                },
            },
        }).promise();

        return {
            statusCode: code.httpStatus.Created,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' // to allow cross origin access
            },
            body: json.responseBody(code.httpStatus.Created, 0, message.msg.ItemCreatedSuccessed, '', 1)
          }
        // console.log('URL.sqs.AUTOMATE_SQS_BALANCE', URL.sqs.AUTOMATE_SQS_PAYROLL)
        // await sqs.sendMessage({
        //   QueueUrl: URL.sqs.AUTOMATE_SQS_PAYROLL,
        //   MessageBody: JSON.stringify(dInvoice),
        //   MessageAttributes: {
        //     AttributeName: {
        //       StringValue: "Attribute Value",
        //       DataType: "String",
        //     },
        //   },
        // }).promise();
    } catch (e) {
        console.log('error', e)
        return -1
    }
}