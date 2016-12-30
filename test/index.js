/* global describe, it */

'use strict'

var Chaste = require('..')
var pad = require('lodash.pad')

require('should')
require('date-utils')

describe('Chaste', function () {
  describe('interface', function () {
    it('rest params', function () {
      var date = new Date(1995, 11, 17, 3, 24, 0)
      var expectedDate = Chaste(Date)(1995, 11, 17, 3, 24, 0)
      Date.equals(expectedDate, new Date(date)).should.be.true()
    })
  })

  describe('casting', function () {
    describe('primitives', function () {
      it('number', function () {
        Chaste(Number)('1').should.be.equal(1)
      })

      it('string', function () {
        Chaste(String)(1).should.be.equal('1')
      })

      it('date', function () {
        [1458647099653, 'October 13, 1975'].forEach(function (date) {
          var expectedDate = Chaste(Date)(date)
          Date.equals(expectedDate, new Date(date)).should.be.true()
        })
      })

      it('array', function () {
        [
          {foo: 'bar'},
          '23',
          23
        ].forEach(function (fixture) {
          [Array, []].forEach(function (ctx) {
            Chaste(ctx)(fixture).should.be.eql([fixture])
          })
        })
      })

      it('object', function () {
        [Object, {}].forEach(function (ctx) {
          Chaste(ctx)({foo: 'bar'}).should.be.eql({foo: 'bar'})
        })
      })

      it('regexp', function () {
        [/hola/, 'hola'].forEach(function (val) {
          Chaste(RegExp)(val).should.be.eql(/hola/)
        })
      })

      describe('boolean', function () {
        function castBoolean (type, values) {
          values.forEach(function (val) {
            var chaste = Chaste(Boolean)(val)
            chaste.should.be.equal(type)
          })
        }

        it('positive', function () {
          castBoolean(true, [true, 'true', 1])
        })

        it('negative', function () {
          castBoolean(false, [false, 0, ''])
        })
      })
    })

    it('custom', function () {
      var chaste = Chaste(pad)
      chaste('abc', 8, '_-').should.be.equal('_-abc_-_')
    })
  })

  describe('perf', function () {
    it('avoid recast flat types', function () {
      Chaste(String)('1').should.be.equal('1')
    })
  })
})
