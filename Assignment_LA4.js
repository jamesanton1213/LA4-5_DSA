let queue = [];

function addCustomer() {
    let name = prompt("Enter your name:");
    if (name) {
        queue.push(name);
        alert(`Hello, ${name}! Your queue number is ${queue.length}`);
        displayQueue();
    }
}

function serviceCustomer() {
    if (queue.length === 0) {
        alert("No customers in queue.");
        return;
    }

    let number = parseInt(prompt("Enter the queue number to be serviced:"));
    if (!isNaN(number) && number > 0 && number <= queue.length) {
        let servedCustomer = queue[number - 1];
        alert(`Now serving: ${servedCustomer}`);
        queue.splice(number - 1, 1); // Remove the customer from the queue
        displayQueue();
    } else {
        alert("Invalid queue number.");
    }
}

function displayQueue() {
    console.log("Updated Queue:");
    queue.forEach((customer, index) => {
        console.log(`${index + 1}. ${customer}`);
    });
}
