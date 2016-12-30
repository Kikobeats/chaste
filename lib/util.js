'use strict'

var values = require('lodash.values')
var isArray = Array.isArray

function createArray () {
  var arr = []
  for (var i = 0; i < arguments.length; i++) arr.push(arguments[i])
  return arr
}

function createApplyConstructor (ctx) {
  /**
   * That's for special case when ctx is a Object/Array literal,
   * like [] or {}.
   *
   * In both cases, the literal declaration doesn't have prototype because
   * the instance is declared inline and not wrapped by the native type.
   */
  if (!ctx.prototype) ctx = isArray(ctx) ? Array : Object

  function applyConstructor () {
    return ctx.apply(ctx, arguments)
  }

  return applyConstructor
}

function createApplyNewConstructor (ctx) {
  function applyNewConstructor () {
    var args = [null].concat(values(arguments))
    var FactoryFn = ctx.bind.apply(ctx, args)
    return new FactoryFn()
  }

  return applyNewConstructor
}

module.exports = {
  createApplyNewConstructor,
  createApplyConstructor,
  createArray
}
