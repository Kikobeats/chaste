'use strict'

var includes = require('lodash.includes')
var values = require('lodash.values')
var typeOf = require('fn-type')

function isArrayLiteral (v) {
  return typeOf(v) === 'array' && !v.apply
}

function isObjectLiteral (v) {
  return typeOf(v) === 'object' && !v.apply
}

function applyConstructor (ctx, args) {
  if (isArrayLiteral(ctx)) ctx = Array
  if (isObjectLiteral(ctx)) ctx = Object
  return ctx.apply(ctx, args)
}

function applyNewConstructor (ctx, args) {
  args = [null].concat(args)
  var FactoryFunction = ctx.bind.apply(ctx, args)
  return new FactoryFunction()
}

module.exports = {
  applyNewConstructor: applyNewConstructor,
  applyConstructor: applyConstructor,
  isArrayLiteral: isArrayLiteral,
  isObjectLiteral: isObjectLiteral,
  includes: includes,
  values: values,
  typeOf: typeOf
}
