# Stock Market

## Description

The function maxProfit, which, given number and a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.

For example if the input is: `24 45, 24, 35, 31, 40, 38, 11` the program will return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made.

If no profit could have been made, return `-1`.

## Installation

Clone this repository to a new directory on your computer:
```
git clone https://github.com/fiveache/Stock-Market
```

## Usage
In the command line, run `node index.js <number1> <number2> <number3> <number4>, etc.`
Where:
  * number1 is the purchase price
  * number2 is the first selling price
  * number3 is the second selling price
  * number4 is the second selling price
  * etc.

### Checking a number against stock prices where a profit will be made:
```
node index.js 24 45 24 35, 31, 40, 38, 11
```
`index.js` will return `16`.

### Checking a number against stock prices where a profilt will not be made:

```
node index.js 38 45 24 35, 31, 40, 38, 11
```
`index.js` will return `-1`.

## Summary of what this project demonstrates:
This project demonstrates:
