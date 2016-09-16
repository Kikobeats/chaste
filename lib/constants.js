'use strict'

var toNumber = require('lodash.tonumber')
var toString = require('lodash.tostring')

module.exports = {
  CLASS_TYPES: [
    'Buffer',
    'Date',
    'Error'
  ],

  FLAT_TYPES: {
    'String': toString,
    'Number': toNumber,
    'Boolean': Boolean,
    'RegExp': RegExp
  }
}
