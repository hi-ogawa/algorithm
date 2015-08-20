# random data factory
chance = new require('chance')()
_      = require 'underscore'

# module to test
MySort = require('../src/sort.js').MySort

describe "MySort", ->

  xit "MyShift", ->

    expect(MySort.myShift([0, 1, 2, 3, 4, 5], 1, 4)).toEqual [0, 2, 3, 4, 1, 5]

    _(_.range(100)).each ->

      arr    = chance.rpg '100d100'
      from   = chance.natural {min: 0, max: arr.length - 1}
      to     = chance.natural {min: 0, max: arr.length - 1}
   
      ans    = arr.slice(0); fromEl = ans[from]; ans.splice from, 1; ans.splice to, 0, fromEl
      expect(MySort.myShift(arr, from, to)).toEqual ans

  xit "insertSort", ->

    _(_.range(200)).each ->

      arr  = chance.rpg '100d100'
      comp = (a, b) -> a < b
      ans  = arr.slice(0).sort (a,b) -> a - b
      expect(MySort.insertSort(arr, comp)).toEqual ans

  xit "selectSort", ->

    _(_.range(200)).each ->

      arr  = chance.rpg '100d100'
      comp = (a, b) -> a < b
      ans  = arr.slice(0).sort (a,b) -> a - b
      expect(MySort.selectSort(arr, comp)).toEqual ans

  
