'use strict'

var CONST = require('./constants')
var util = require('./util')

function chasteFactoryFn (ctx) {
  function chaste () {
    return util.applyConstructor(ctx, arguments)
  }
  return chaste
}

function chasteFactoryClass (ctx) {
  if (ctx == null) return new Error('Chaste need a type')

  function chaste () {
    return util.applyNewConstructor(ctx, util.values(arguments))
  }

  return chaste
}

function chasteFactoryType (ctx) {
  var type = ctx.name.toLowerCase()
  return function chaste (input) {
    if (typeof input === type) return input
    return ctx(input)
  }
}

function Chaste (ctx) {
  if (!(this instanceof Chaste)) return new Chaste(ctx)
  if (util.includes(CONST.CLASS_TYPES, ctx.name)) return chasteFactoryClass(ctx)
  if (util.includes(CONST.FLAT_TYPES, ctx.name)) return chasteFactoryType(global[ctx.name])
  return chasteFactoryFn(ctx)
}

module.exports = Chaste
