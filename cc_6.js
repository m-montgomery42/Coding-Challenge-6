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

// Task 3: Arrow Function
// Write an arrow function calculateBonus(salary, performanceRating) to determine a bonus:
const calculateBonus = (salary, performanceRating) => {
    // bonus variable
    let bonus;
    // Determine bonus based on performance rating
    if (performanceRating === "Excellent") {
      bonus = salary * 0.20;
    } else if (performanceRating === "Good") {
      bonus = salary * 0.10;
    } else if (performanceRating === "Average") {
      bonus = salary * 0.05;
    } else {
      bonus = 0; // If performance rating is unknown
    }
    // Log the result
    console.log(`Bonus: $${bonus}`);
    // Return the bonus
    return bonus;
  };
  calculateBonus(5000, "Excellent");
  calculateBonus(7000, "Good");

// Task 4: Parameters and Arguments
// Write a function calculateSubscriptionCost(plan, months, discount = 0) that calculates cost based on basic, premium, enterprise
function calculateSubscriptionCost(plan, months, discount = 0) {
    // cost per month for each plan
    let planCost;
    // cost for selected plan
    if (plan === "Basic") {
      planCost = 10;
    } else if (plan === "Premium") {
      planCost = 20;
    } else if (plan === "Enterprise") {
      planCost = 50;
    } else {
      console.log("Invalid plan");
      return;
    }
    // total cost before discount
    let totalCost = planCost * months;
    // apply discount
    totalCost -= totalCost * (discount / 100);
    // Log the total cost with the discount applied
    console.log(`Total Cost: $${totalCost}`);
    // Return the total cost
    return totalCost;
  }
  calculateSubscriptionCost("Basic", 6, 10);
  calculateSubscriptionCost("Premium", 12, 0);

// Task 5: Returning Values
// Write a function convertCurrency(amount, exchangeRate) that returns the converted amount.
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate; // converted amount
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
    return convertedAmount;
}
convertCurrency(100, 1.1);
convertCurrency(250, 0.85);

// Task 6: Higher-Order Functions
// Declare an array orders with at least five order amounts
let orders = [200, 600, 1200, 450, 800];
// Write a higher-order function applyBulkDiscount(orders, discountFunction) that applies a 10% discount on orders above $500
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
  }
  let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
  // result of discounted orders
  console.log(discountedOrders);

// Task 7: Closures
// Write a function createExpenseTracker() that returns another function to add expenses and keep a running total
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;  // Add the new expense to the total
        return `Total Expenses: $${totalExpenses}`;
      };
}
let tracker = createExpenseTracker();
console.log(tracker(200));
console.log(tracker(150));