// Task 1: Function Declaration
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    // Calculate profit
    let profit = (sellingPrice - costPrice) * unitsSold;
    // Log result
    console.log(`Total Profit: $${profit}`);
    // Return profit
    return profit;
}
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);