const maxProfit = (prices) => {
  let cheapestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < cheapestPrice) {
      cheapestPrice = price;
    }
    const currentProfit = price - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
