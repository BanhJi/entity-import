'use strict'

module.exports.responseBody = function (code, data, msg, error, total, key = {},consumedCapacity = 0 ) {
  return JSON.stringify(
    {
      statusCode: code,
      data: data,
      message: msg,
      error: error,
      total: total,
      key: key,
      consumedCapacity: consumedCapacity
    }
  )
}
