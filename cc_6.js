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

// Task 2: Function Expression
// Declare a function expression calculateSalesTax(amount, taxRate) that calculates sales tax.
const calculateSalesTax = function(amount, taxRate) {
    // calculate and log sales tax
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`);
// return the sales tax
return salesTax;
};
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);