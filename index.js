/**
 * ----------------------------------------------------
 * HELPER FUNCTIONS
 * ----------------------------------------------------
 */

// Get input from user of what the purchase price was & store in variable (input)

/**
 * getInputFromUser
 * @return {[object]} [purchase: price @p purchase, stockPrices: throughout day]
 */
const getInputFromUser = () => {
  const input = process.argv.slice(2);
  const newArr = input.map(num => parseInt(num, 10));
  const newObject = {
    purchase: newArr[0],
    stockPrices: newArr.slice(1),
  };
  return newObject;
};

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


const input = getInputFromUser();
const {
  purchase,
  stockPrices,
} = input;

console.log(maxProfit(purchase, stockPrices));

/**
 * ----------------------------------------------------
 * EXPORTS
 * ----------------------------------------------------
 */

module.exports = {
  maxProfit,
};
