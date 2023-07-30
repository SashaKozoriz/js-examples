'use strict';

// const lordy = {
//   serialNo: 1,
//   chipVersion: 12,
// };
// const charlie = {
//   serialNo: 2,
//   chipVersion: 12,
// };

// const compareRobots = (robot1, robot2) => {
//   if (Object.entries(robot1).length !== Object.entries(robot2).length) {
//     return false;
//   }

//   for (const key in robot1) {
//     if (key === 'serialNo') {
//       continue;
//     }

//     if (robot1[key] !== robot2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(compareRobots(lordy, charlie));

// function getLeaders(numbers) {
//   const leaders = [];
//   let sum = 0;

//   for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] > sum) {
//       leaders.unshift(numbers[i]);
//     }
//     sum += numbers[i];
//   }

//   return leaders;
// }

// console.log(getLeaders([16, 17, 4, 3, 5, 2]));

// function getProductId(url) {
//   const parts = url.split('-p-');
//   const id = parts[parts.length - 1].split('-')[0];
//   return id;
// }

// console.log(
//   getProductId(
//     'http://www.exampleshop.com/letter-p-book-stand-p-192837-11112011.html'
//   )
// );

// function getRowWeights(people) {
//   const result = [0, 0];
//   for (let i = 0; i < people.length; i++) {
//     result[i % 2] += people[i];
//   }

//   return result;
// }

// const charlie = {
//   name: 'Charlie',
// }

// const lordy = {
//   name: 'Lordy',
// }

// const joy = {
//   name: 'Joy',
// }

// const makeRobotsPair = (robot1, robot2) => {
//   robot1.partner = robot2 || null;

//   if (robot2) {
//     robot2.partner = robot1;
//   }
// };

// makeRobotsPair(lordy, joy);

// makeRobotsPair(charlie);

// console.log(charlie, lordy, joy);

// const robot = {
//   chipVer: 9,
//   serialNo: 413,
//   wheels: 2,
// };

// const parts = [
//   { gravitationSensor: true },
//   { wheels: 6 },
//   { chipVer: 16 },
//   { ram: 1024 },
//   { displays: 2 },
// ]

// function upgradeRobot(robot, parts) {
//   parts.forEach(part => {
//     const [key, value] = Object.entries(part)[0];
//     robot[key] = value;
//   });
// }

// upgradeRobot(robot, parts);

// console.log(robot);

// /**
//  * Refactored function to fill customer's vehicle tank with fuel
//  * @param {object} customer - Customer object with money, vehicle, and fuel information
//  * @param {number} fuelPrice - Price per unit of fuel
//  * @param {number} amount - Optional amount of fuel to fill the tank with (default is Infinity)
//  */
// function fillTank(customer, fuelPrice, amount = Infinity) {
//   // Calculate the amount of free space in the vehicle tank
//   const freeSpace = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;

//   // Calculate the amount of fuel the customer can afford to buy
//   const canBuy = customer.money / fuelPrice;

//   // Determine the amount of fuel to fill the tank with (limited by free space, affordability, and optional amount)
//   const requiredAmount = Math.min(amount, freeSpace, canBuy);

//   // Round the amount of fuel to the nearest valid value (minimum is 2 units)
//   const roundedAmount = roundFuel(requiredAmount);

//   // If the rounded amount is less than 2, do not fill the tank
//   if (roundedAmount < 2) {
//     return;
//   }

//   // Add the rounded amount of fuel to the vehicle tank
//   customer.vehicle.fuelRemains += roundedAmount;

//   // Subtract the cost of the fuel from the customer's money
//   customer.money -= roundPrice(roundedAmount * fuelPrice);
// }

// function roundFuel(fuel) {
//   return Math.floor(fuel * 10) / 10;
// }

// function roundPrice(price) {
//   return Math.round(price * 100) / 100;
// }

// const obj = {
//   displays: 8,
//   vehicles: 1,
//   money: 10,
//   serialNo: 1,
//   chipVersion: 12,
//   wheels: 2,
// }

// const statistics = {
//   lighting: 29,
//   cameras: 74,
//   tvs: 18,
//   speakers: 3,
//   plugs: 8,
// };

// /**
//  * Returns a new object with rounded percentage values for each key of the input
//  * object. The percentage is calculated by dividing the value of each key by the
//  * sum of all values, rounding the result to the nearest integer and multiplying
//  * it by 360 (the degrees of a circle). This function does not modify the input object.
//  *
//  * @param {Object} data - An object with numeric values for each key.
//  * @return {Object} An object with rounded percentage values for each key of the input object.
//  */
// function getRoundedChartData(data) {
//   let sum = 0;
//   for (const key in data) {
//     sum += data[key];
//   }
//   console.log('Sum:', sum);

//   const chart = {};
//   for (const key in data) {
//     chart[key] = Math.round((data[key] * 360) / sum);
//   }
//   console.log('Chart:', chart);

//   return chart;
// }

// console.log(getRoundedChartData(statistics));

// const robot = {
//   Kolli: 'name',
//   123: 'chipVer',
//   3: 'chipVer',
// };

// function inverseRobot(robot) {
//   debugger
//   const inverse = {};
//   for (const [key, value] of Object.entries(robot)) {
//     if (inverse[value]) {
//       return null
//     }
//     inverse[value] = key;
//     console.log(key, value);
//   }

//   return inverse;
// }

// console.log(inverseRobot(robot));

// const bucket = {
//   displays: 20,
//   wheel: 100,
//   cpu: 40,
// }

// const products = {
//   amazobot: {
//     wheel: 12.5,
//   },
//   robozetka: {
//     displays: 56.2,
//     cpu: 150,
//   }
// }

// /**
//  * Calculates the total cost of products in the bucket object,
//  * using the prices provided in the products object.
//  * @param {object} bucket - Object containing the name and quantity of each product.
//  * @param {object} products - Object containing the price of each product, organized by store.
//  * @returns {number} - Total cost of all products in the bucket.
//  */
// function calculateCost(bucket, products) {
//   // Initialize the cost to zero
//   let cost = 0;

//   // Extract the prices of all products from the stores in the products object
//   let stores = Object.values(products);
//   let prices = Object.assign({}, ...stores);

//   // Iterate through each product in the bucket and multiply its price by its quantity
//   for (const product in bucket) {
//     cost += prices[product] * bucket[product];
//   }

//   // Return the total cost of all products in the bucket
//   return cost;
// }
// console.log(calculateCost(bucket, products));

// /**
//  * Transforms the state object based on the given actions.
//  * @param {Object} state - The original state object.
//  * @param {Array} actions - An array of actions to be applied to the state.
//  * @returns {Object} - The transformed state object.
//  */
// function transformState(state, actions) {
//   // Iterate through each action in the actions array
//   for (const action of actions) {
//     // Check the type of the action
//     switch (action.type) {
//       case 'addProperties':
//         // Add the properties from action.extraData to the state object
//         state = {
//           ...state,
//           ...action.extraData,
//         };
//         break;
//       case 'removeProperties':
//         // Remove the properties specified in action.keysToRemove from the state object
//         for (const key of Object.values(action.keysToRemove)) {
//           delete state[key];
//         }
//         break;
//       case 'clear':
//         // Clear the state object by removing all its properties
//         for (const key in state) {
//           delete state[key];
//         }
//         break;
//     }
//   }

//   // Return the transformed state object
//   return state;
// }

// transformState(
//   {
//     foo: 'bar',
//     bar: 'foo',
//   },
//   [
//     {
//       type: 'addProperties',
//       extraData: {
//         name: 'Jim',
//         hello: 'world',
//       },
//     },
//     {
//       type: 'removeProperties',
//       keysToRemove: ['bar', 'hello'],
//     },
//     {
//       type: 'addProperties',
//       extraData: { another: 'one' },
//     },
//   ]
// );

// const admin = {
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     const names = value.split(' ');

//     if(names.length < 2) {
//       throw new Error('Invalid full name');
//     }

//     this.firstName = names[0];
//     this.lastName = names[1];
//   },

//   firstName: 'Bob',
//   lastName: 'Smith',
// };

// congratulate(admin);
// admin.fullName = 'Alice Black';
// congratulate(admin);

// function congratulate(user) {
//   console.log(`Hi, ${user.fullName}`);
// }

// // Save all passed arguments to args array
// numbers.push = function(...args) {
//   for (const arg of args) {
//     // (this.length - 1) is the index of the current last element
//     // so the next index is this.length
//     this[this.length] = arg;
//     // After adding one element the length increases
//     // so the next element is added at the next index
//   }

//   // Original method push returns new length of changed array
//   return this.length;
// };

// Refactored code for the Array.prototype.includes method.

// Array.prototype.includes = function(searchElement, fromIndex = 0) {
//   // Initialize the index variable with the provided fromIndex value.
//   let index = fromIndex;

//   // If fromIndex is negative, add the length of the array to it.
//   if (index < 0) {
//     index += this.length;
//   }

//   // If the final index is still negative, set it to 0.
//   if (index < 0) {
//     index = 0;
//   }

//   // Iterate over the elements starting from the final index.
//   for (let i = index; i < this.length; i++) {
//     // If the current element matches the searchElement, return true.
//     if (searchElement === this[i]) {
//       return true;
//     }
//   }

//   // If no match is found, return false.
//   return false;
// };

// // Refactored code to improve readability and adhere to coding standards

// // Add indexOf method to the Array prototype
// Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
//   // Set the initial index value
//   let index = fromIndex;

//   // If the index is negative, adjust it to be positive
//   if (index < 0) {
//     index += this.length;
//   }

//   // If the index is still negative, set it to 0
//   if (index < 0) {
//     index = 0;
//   }

//   // Loop through the array from the given index
//   for (let i = index; i < this.length; i++) {
//     // Check if the current element matches the search element
//     if (searchElement === this[i]) {
//       // Return the index of the element if found
//       return i;
//     }
//   }

//   // Return -1 if the search element is not found
//   return -1;
// };

// let shelves = [
//   ['Going Over', 'Brazen'],
//   ['The Enemy'],
//   ['Followers', 'Belle Epoque']
// ];

// function sortBooks(books) {
//   let sortedArray = [];

//   for (const book of books) {
//     sortedArray.push(...book);
//   }

//   return sortedArray.sort();
// }

// console.log(sortBooks(shelves));

// console.log(reverseMessage('sihT si caidoZ .gnikaeps olleH naS !ocsicnarF'));

// function reverseMessage(message) {
//   const reversedWords = message.split(' ').reverse().join(' ');
//   const reversed = reversedWords.split('').reverse().join('');

//   return reversed;
// }

// console.log(makeOrderList('10 coca cola, 20 robots parts, 40 fries'));

// function makeOrderList(order) {
//   if (order.length === 0) { // If the order is empty, return an empty object
//     return {};
//   }

//   const orderList = {}; // Create an empty object to store the order list
//   const products = order.split(', '); // Split the order into individual products by separating them with a comma and a space

//   for (const product of products) { // Iterate over each product in the order
//     const [key, ...value] = product.split(' '); // Split the product into a key and a value by separating them with a space
//     const productName = value.join('_'); // Join the value parts with an underscore to form the product name
//     orderList[productName] = key; // Assign the key as the value for the product name in the order list
//   }

//   return orderList; // Return the order list object
// }

// console.log(calculate((a, b) => a * b, 6, 3),
//   calculate((a, b) => a + b, 60, 3),
//   calculate((a, b) => a * b, 65, 36),
//   calculate((a, b) => a / b, 68, 10));

// function calculate(operation, x, y) {
//   return operation(x, y);
//   }

// function printValues(values, format = (value) => `Value: ${value}`) {
//   for (let i = 0; i < values.length; i++) {
//     const message = format(values[i], i);
//     console.log(message);
//   }
// }

// printValues([1, 2, 3]);
// printValues([10, 20, 30, 40, 50],
//   (value, index) => `Index: ${index}, Value: ${value}`
// );

// let operand1 = [144, 2];
// let operand2 = [4, 56];

// function calculate(operands, operation) {
//   return operation(...operands)
// }

// console.log(calculate(operand1, (a, b) => a * b));


// const candies1 = ['Kitkat', 'Nuts', 'Lion', 'Mars', 'Snickers', 'Bounty', 'Nuts'];

// const containsO = candy => candy.includes('o');
// const isLessThan5 = candy => candy.length < 5;

// function filter(candies, isGoodEnough) {
//   const result = [];


//   for (const candy of candies) {
//     if (isGoodEnough(candy)) {
//       result.push(candy);
//     }
//   }

//   return result;
// }


// function createSizeFilter(size) {
//   return candy => candy.length <= size;
// }


// const isUpTo4 = createSizeFilter(4);
// const isUpTo6 = createSizeFilter(6);
// console.log(filter(candies1, isUpTo4))
// console.log(filter(candies1, isUpTo6))



const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


const result = words
  .map((word, index) => ({ name: word, index }))
  .filter(({ name, index }) => name.length > index)
  .find(({name, index}) => name[index] === 'o');

console.log(result);