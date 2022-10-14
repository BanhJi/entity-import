'use strict'

let stage = process.env.url
if (stage.includes('prod')) {
    stage = '-prod'
} else if(stage.includes('staging')){
    stage = '-staging'
} else {
    stage = '-dev'
}
module.exports.sqs = {
    IMPORTINVOICE_SQS: 'https://sqs.ap-southeast-1.amazonaws.com/207186326779/ImportInvoices' + stage,
}
