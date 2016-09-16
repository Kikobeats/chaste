'use strict'

var isArray = Array.isArray

function applyConstructor (ctx, args) {
  /**
   * That's for special case when ctx is a Object/Array literal,
   * like [] or {}.
   *
   * In both cases, the literal declaration doesn't have prototype because
   * the instance is declared inline and not wrapped by the native type.
   */
  if (!ctx.prototype) ctx = isArray(ctx) ? Array : Object
  return ctx.apply(ctx, args)
}

function applyNewConstructor (ctx, args) {
  args = [null].concat(args)
  var FactoryFn = ctx.bind.apply(ctx, args)
  return new FactoryFn()
}

module.exports = {
  applyNewConstructor: applyNewConstructor,
  applyConstructor: applyConstructor
}
