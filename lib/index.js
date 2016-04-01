'use strict'

var CONST = require('./constants')
var util = require('./util')

function chasteFn (ctx) {
  function chaste () {
    return util.applyConstructor(ctx, arguments)
  }
  return chaste
}

function chasteFnNew (ctx) {
  if (ctx == null) return new Error('Chaste need a type')

  function chaste () {
    return util.applyNewConstructor(ctx, util.values(arguments))
  }

  return chaste
}

function Chaste (ctx) {
  if (!(this instanceof Chaste)) return new Chaste(ctx)
  if (util.includes(CONST.NEW_CONSTRUCTORS, ctx.name)) return chasteFnNew(ctx)
  return chasteFn(ctx)
}

module.exports = Chaste
