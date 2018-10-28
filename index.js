/**
 * ----------------------------------------------------
 * HELPER FUNCTIONS
 * ----------------------------------------------------
 */

// Get input from user of what the purchase price was & store in variable (input)

/**
 * getInputFromUser
 * @return {[]} [description]
 */
const getInputFromUser = () => process.argv[2] || console.log('not a valid input');

/**
 * ----------------------------------------------------
 * Implementation
 * ----------------------------------------------------
 */

/**
 * maxProfit
 * @param  {[number]} input        [input of the user representing the purchase price of stock]
 * @param  {[array]} stockPrices  [array of stock prices of the day]
 * @return {[number]}             [the max profit of selling that stock]
 *
 */
const maxProfit = (input, stockPrices) => {
  if (stockPrices.includes(input)) {
    const index = stockPrices.indexOf(input);
    const pricesSincePurchase = stockPrices.slice(index + 1);
    pricesSincePurchase.sort((a, b) => b - a);
    const highestPrice = pricesSincePurchase[0];
    const profit = highestPrice - input;
    return profit >= 0 ? profit : -1;
  }
  // if the input is not in array:
  return -1;
};

const stockPrices = [45, 24, 35, 31, 40, 38, 11];
const input = getInputFromUser();
if (input) maxProfit(input, stockPrices);

/**
 * ----------------------------------------------------
 * EXPORTS
 * ----------------------------------------------------
 */

module.exports = {
  maxProfit,
};
