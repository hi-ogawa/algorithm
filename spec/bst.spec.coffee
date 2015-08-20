BST  = require('../src/bst').BST
rep  = require('../src/bst').rep
chance = new require('chance')()

describe "BST", ->

  bst = null
  beforeEach ->
    bst = new BST [2, 7, 0, 5, 3], (a, b) -> a < b


  xit "prints visualize", ->
      console.log new BST((chance.rpg '10d9'), (a, b) -> a < b).visualize()


  it "rep", ->
    expect(rep(5, "ab")).toBe "ababababab"

  it "search", ->
    expect(bst.search(5)).toBe true
    expect(bst.search(4)).toBe false

  it "visualize", ->
    visual = """
             2 - 7 - @
             |   |
             |   + - 5 - @
             |       |
             |       + - 3 - @
             |           |
             |           + - @
             |
             + - 0 - @
                 |
                 + - @
             """
    _visual = """
              2 - 7 - @

                  + - 5 - @

                      + - 3 - @

                          + - @

              + - 0 - @

                  + - @


              """
    expect(bst.visualize()).toBe _visual
