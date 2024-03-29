/**
  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and 
  choosing a different day in the future to sell that stock.

  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var prices1 = [7, 1, 5, 3, 6, 4];
var expected1 = 5;
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

var prices2 = [5, 4, 3, 2, 1];
var expected2 = 0;
// no profit can be made

/**
 * Take an array of prices and return the maximum profit
 * @param {number[]} array of prices
 * @return {number} max profit
 */
function maxProfit(prices) {}

// function maxProfit(prices) {
//     if (prices.length < 2) {
//         return 0; // Not enough days to make a profit
//     }
//
//     let minPrice = prices[0];
//     let maxProfit = 0;
//
//     for (let i = 1; i < prices.length; i++) {
//         const currentPrice = prices[i];
//         // Update the minimum price seen so far
//         minPrice = Math.min(minPrice, currentPrice);
//         // Update the maximum profit if selling at the current price would give a higher profit
//         maxProfit = Math.max(maxProfit, currentPrice - minPrice);
//     }
//
//     return maxProfit;
// }

function maxProfit(prices) {
  if (prices.length < 2) {
    return 0; // Not enough days to make a profit
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    // Update the minimum price seen so far
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
    // Update the maximum profit if selling at the current price would give a higher profit
    if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 2, 5, 1, 6, 4]));

// =======================================================================================================

/*
  There is a collection of input strings and a collection of query strings. 
  For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
  
*/

var stringList1 = ["ab", "ab", "abc"];
var queries1 = ["ab", "abc", "bc"];
var expected = [2, 1, 0];

/**
 * Return an array of integers representing the frequency of occurrence of each query string in string list
 * @param {string[]} array of strings
 * @param {string[]} string to search for
 * @return {number[]} number of instances of each query string
 */
function matchingStrings(stringList, queries) {
  const frequencies = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    const query = queries[i];

    for (let j = 0; j < stringList.length; j++) {
      const str = stringList[j];

      if (str === query) {
        count++;
      }
    }

    frequencies.push(count);
  }

  return frequencies;
}

console.log(matchingStrings(stringList1, queries1));
