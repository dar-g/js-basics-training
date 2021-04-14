/*
    There is a queue for the self-checkout tills at the supermarket. Your task is write a function
    to calculate the total time required for all the customers to check out!
    Input: customers - an array of positive integers representing the queue (Each integer represents
    a customer, and its value is the amount of time they require to check out), n: a positive integer,
    the number of checkout tills.
    Output: The function should return an integer, the total time required.
    ### EXAMPLE - queueTime([5,3,4], 1)
    // should return 12, because when there is 1 till, the total time is just the sum of the times
 */

let customersQueue = [1, 2, 5];

function calcQueueTime (customers, numOfTills) {
    let customerTime = 0;
    let numOfCustomers = customers.length;

    for (let i = 0; i < numOfCustomers; i++) {
        customerTime += customers[i];
    }

    let longestCustomer = Math.max(...customers);
    let totalTimeWithoutLongestC = customerTime - longestCustomer;

    console.log(numOfCustomers, longestCustomer, totalTimeWithoutLongestC);

    if (numOfTills < numOfCustomers) {
        if (totalTimeWithoutLongestC > longestCustomer) {
            return customerTime / numOfTills;
        } else {
            return longestCustomer;
        }
    } else {
        if (totalTimeWithoutLongestC > longestCustomer) {
            return customerTime / numOfCustomers;
        } else {
            return longestCustomer;
        }
    }
}

console.log(calcQueueTime(customersQueue, 3));
