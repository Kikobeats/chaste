'use strict'

var includes = require('lodash.includes')
var values = require('lodash.values')
var CONST = require('./constants')
var util = require('./util')

function chasteFactoryFn (ctx) {
  function chaste () {
    return util.applyConstructor(ctx, arguments)
  }
  return chaste
}

function chasteFactoryClass (ctx) {
  function chaste () {
    return util.applyNewConstructor(ctx, values(arguments))
  }
  return chaste
}

function chasteFactoryType (ctx) {
  console.log(ctx)
  var type = ctx.name.toLowerCase()
  function chaste (input) {
    return (typeof input !== type) ? ctx(input) : input
  }

  return chaste
}

function Chaste (ctx) {
  if (ctx == null) return new TypeError('Chaste need a type')
  if (!(this instanceof Chaste)) return new Chaste(ctx)

  if (includes(CONST.CLASS_TYPES, ctx.name)) return chasteFactoryClass(ctx)
  if (includes(CONST.FLAT_TYPES, ctx.name)) return chasteFactoryType(CONST.FLAT_TYPES[ctx.name])
  return chasteFactoryFn(ctx)
}

module.exports = Chaste
