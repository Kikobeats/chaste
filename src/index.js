'use strict'

const { includes } = require('lodash')

const CONST = require('./constants')
const util = require('./util')

const createApplyConstructor = util.createApplyConstructor
const createApplyNewConstructor = util.createApplyNewConstructor
const createArray = util.createArray

function chasteFactoryType (ctx) {
  const type = ctx.name.toLowerCase()

  function chaste (input) {
    // eslint-disable-next-line
    return typeof input !== type ? ctx(input) : input
  }

  return chaste
}

function Chaste (ctx) {
  if (ctx == null) return new TypeError('Chaste need a type')
  if (!(this instanceof Chaste)) return new Chaste(ctx)

  if (includes(CONST.FLAT_TYPES, ctx.name)) {
    return chasteFactoryType(CONST.FLAT_TYPES[ctx.name])
  }
  if (includes(CONST.CLASS_TYPES, ctx.name)) {
    return createApplyNewConstructor(ctx)
  }
  if (ctx.constructor.name === 'Array' || ctx.name === 'Array') {
    return createArray
  }
  return createApplyConstructor(ctx)
}

module.exports = Chaste
