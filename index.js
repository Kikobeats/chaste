'use strict'

var values = require('lodash.values')

function applyNewConstructor (ctx, args) {
  args = [null].concat(args)
  var FactoryFunction = ctx.bind.apply(ctx, args)
  return new FactoryFunction()
}

function applyConstructor (ctx, args) {
  return ctx.apply(ctx, args)
}

function chasteFn (ctx) {
  function chaste () {
    return applyConstructor(ctx, arguments)
  }
  return chaste
}

function chasteDate () {
  return applyNewConstructor(Date, values(arguments))
}

function Chaste (ctx) {
  if (!(this instanceof Chaste)) return new Chaste(ctx)
  if (ctx.name !== 'Date') return chasteFn(ctx)
  return chasteDate
}

module.exports = Chaste
