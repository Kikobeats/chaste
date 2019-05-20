'use strict'

const { values, flatten } = require('lodash')

function createArray () {
  return flatten(arguments)
}

function createApplyConstructor (ctx) {
  /**
   * That's for special case when ctx is a Object/Array literal,
   * like [] or {}.
   *
   * In both cases, the literal declaration doesn't have prototype because
   * the instance is declared inline and not wrapped by the native type.
   */
  if (!ctx.prototype) ctx = ctx.constructor

  function applyConstructor () {
    return ctx.apply(ctx, arguments)
  }

  return applyConstructor
}

function createApplyNewConstructor (ctx) {
  function applyNewConstructor () {
    const args = [null].concat(values(arguments))
    const FactoryFn = ctx.bind.apply(ctx, args)
    return new FactoryFn()
  }

  return applyNewConstructor
}

module.exports = {
  createApplyNewConstructor,
  createApplyConstructor,
  createArray
}
