'use strict'

var includes = require('lodash.includes')
var CONST = require('./constants')
var util = require('./util')

var createApplyConstructor = util.createApplyConstructor
var createApplyNewConstructor = util.createApplyNewConstructor
var createArray = util.createArray

function chasteFactoryType (ctx) {
  var type = ctx.name.toLowerCase()
  function chaste (input) {
    return (typeof input !== type) ? ctx(input) : input
  }

  return chaste
}

function Chaste (ctx) {
  if (ctx == null) return new TypeError('Chaste need a type')
  if (!(this instanceof Chaste)) return new Chaste(ctx)

  if (includes(CONST.FLAT_TYPES, ctx.name)) return chasteFactoryType(CONST.FLAT_TYPES[ctx.name])
  if (includes(CONST.CLASS_TYPES, ctx.name)) return createApplyNewConstructor(ctx)
  if (ctx.constructor.name === 'Array' || ctx.name === 'Array') return createArray

  return createApplyConstructor(ctx)
}

module.exports = Chaste
