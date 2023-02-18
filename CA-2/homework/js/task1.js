const MIN_INITIAL_AMOUNT = 1000;
const MIN_NUM_OF_YEARS = 1;
const MAX_PERCENTAGE_OF_YEAR = 100;
const DECIMAL_PLACES = 2;

let initialAmount = Number(prompt('Enter initial amount:'));
let numOfYears = Number(prompt('Enter number of years:'));
let percentageOfYear = Number(prompt('Enter percentage of a year:'));

if (
  isNaN(initialAmount) ||
  isNaN(numOfYears) ||
  isNaN(percentageOfYear) ||
  initialAmount < MIN_INITIAL_AMOUNT ||
  numOfYears < MIN_NUM_OF_YEARS ||
  percentageOfYear > MAX_PERCENTAGE_OF_YEAR
) 

{
  alert('Invalid input data');
} 
else {
  let totalAmount = initialAmount;
  let totalProfit = 0;

  for (let i = 1; i <= numOfYears; i++) {
    const PERCENTAGE_FACTOR = 100;
    let profit = totalAmount * percentageOfYear / PERCENTAGE_FACTOR;
    totalProfit += profit;
    totalAmount += profit;

    alert(`
      ${i} Year
      Total profit: ${profit.toFixed(DECIMAL_PLACES)}
      Total amount: ${totalAmount.toFixed(DECIMAL_PLACES)}
    `);
  }

  alert(`
    Initial amount: ${initialAmount}
    Number of years: ${numOfYears}
    Percentage of year: ${percentageOfYear}
    Total profit: ${totalProfit.toFixed(DECIMAL_PLACES)}
    Total amount: ${totalAmount.toFixed(DECIMAL_PLACES)}
  `);
}
