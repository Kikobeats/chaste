'use strict'

const CONST = require('./constants')
const { createArray, createApplyConstructor, createApplyNewConstructor } = require('./util')

const chasteFactoryType = ctx => {
  const type = ctx.name.toLowerCase()
  // eslint-disable-next-line
  return input => (typeof input !== type ? ctx(input) : input)
}

module.exports = ctx => {
  if (ctx == null) return new TypeError('Chaste need a type')
  if (CONST.FLAT_TYPES[[ctx.name]]) return chasteFactoryType(CONST.FLAT_TYPES[ctx.name])
  if (CONST.CLASS_TYPES.includes(ctx.name)) return createApplyNewConstructor(ctx)
  if (ctx.constructor.name === 'Array' || ctx.name === 'Array') return createArray
  return createApplyConstructor(ctx)
}
