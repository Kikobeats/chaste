'use strict'

var values = require('lodash.values')
var includes = require('lodash.includes')
var newConstructors = ['Buffer', 'Date']

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
