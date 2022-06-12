'use strict'

const createArray = (...args) => [].concat(...args)

const createApplyConstructor = ctx => {
  /**
   * That's for special case when ctx is a Object/Array literal,
   * like [] or {}.
   *
   * In both cases, the literal declaration doesn't have prototype because
   * the instance is declared inline and not wrapped by the native type.
   */
  if (!ctx.prototype) ctx = ctx.constructor
  return (...args) => ctx.apply(ctx, args)
}

const createApplyNewConstructor = ctx => (..._args) => {
  const args = [null].concat(Object.values(_args))
  const FactoryFn = ctx.bind.apply(ctx, args)
  return new FactoryFn()
}

module.exports = {
  createApplyNewConstructor,
  createApplyConstructor,
  createArray
}
