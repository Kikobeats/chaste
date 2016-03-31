'use strict'

var typeOf = require('fn-type')
var values = require('lodash.values')
var includes = require('lodash.includes')
var newConstructors = ['Buffer', 'Date', 'Error']

function isArrayLiteral (v) {
  return typeOf(v) === 'array' && !v.apply
}

function isObjectLiteral (v) {
  return typeOf(v) === 'object' && !v.apply
}

function applyNewConstructor (ctx, args) {
  args = [null].concat(args)
  var FactoryFunction = ctx.bind.apply(ctx, args)
  return new FactoryFunction()
}

function applyConstructor (ctx, args) {
  if (isArrayLiteral(ctx)) ctx = Array
  if (isObjectLiteral(ctx)) ctx = Object
  return ctx.apply(ctx, args)
}

function chasteFn (ctx) {
  function chaste () {
    return applyConstructor(ctx, arguments)
  }
  return chaste
}

function chasteFnNew (ctx) {
  function chaste () {
    return applyNewConstructor(ctx, values(arguments))
  }

  return chaste
}

function Chaste (ctx) {
  if (!(this instanceof Chaste)) return new Chaste(ctx)
  if (includes(newConstructors, ctx.name)) return chasteFnNew(ctx)
  return chasteFn(ctx)
}

module.exports = Chaste
