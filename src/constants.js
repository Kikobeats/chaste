'use strict'

const { toString, toNumber } = require('lodash')

module.exports = {
  CLASS_TYPES: ['Buffer', 'Date'],

  FLAT_TYPES: {
    String: toString,
    Number: toNumber,
    Boolean: Boolean,
    RegExp: RegExp,
    Error: Error
  }
}
