const assert = require('chai').assert
const gameImport = require('../guessingGame')

describe('Guessing Game', () => {
  context('game functionality', () => {
    it('takes in an integer upon instantiation and sets the answer', () => {
      let game = new gameImport.GuessingGame(20)

      assert.equal(game.answer, 20)
    })

    it('is unsolved at first', () => {
      let game = new gameImport.GuessingGame(10)

      assert.equal(game.isSolved(), false)
    })

    it('is solved after correct guess', () => {
      let game = new gameImport.GuessingGame(10)
      game.guess(10)

      assert.equal(game.isSolved(), true)
    })

    it('is not solved after incorrect guess', () => {
      let game = new gameImport.GuessingGame(10)
      let result = game.guess(8)

      assert.equal(result, 'low')
      assert.equal(game.isSolved(), false)
    })
  })
})