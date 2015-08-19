# random data factory
faker = require 'faker'
chance = new require('chance')()

# module to test
MySort = require('../src/sort.js').MySort

describe "MySort.insertSort", ->

    it "", ->
        input = chance.rpg '10d10'
        console.log "editing sort.spec.coffee"
        expect(MySort.insertSort(input)).toEqual input.slice().sort()
