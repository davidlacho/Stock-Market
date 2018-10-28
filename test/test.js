const {
  assert,
} = require('chai');
const {
  maxProfit,
} = require('../index');

describe('Stock Market App', () => {
  describe('maxProfit', () => {
    it('should return a number', () => {
      assert.isNumber(maxProfit(9, [1, 2, 3]));
    });
    it('should return -1 if the input is not in the array', () => {
      assert.strictEqual(maxProfit(6, [1, 2, 3]), -1);
    });
    it('should return the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on', () => {
      assert.strictEqual(maxProfit(24, [45, 24, 35, 31, 40, 38, 11]), 16);
    });
    it('should return -1 if no profit could be made', () => {
      assert.strictEqual(maxProfit(38, [45, 24, 35, 31, 40, 38, 11]), -1);
    });
  });
});
