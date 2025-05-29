let hashedTable = {};

function simpleHash(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 100;
}

function addCustomerHash() {
    let name = prompt("Enter your name:");
    if (name) {
        let key = simpleHash(name);
        while (hashedTable[key]) {
            key = (key + 1) % 100;
        }
        hashedTable[key] = name;
        alert(`Hello, ${name}! Your hashed number is ${key + 1}`);
        displayHashedTable();
    }
}

function serviceCustomerHash() {
    let number = parseInt(prompt("Enter the hashed number to be serviced:"));
    let key = number - 1;

    if (hashedTable[key]) {
        alert(`Now serving: ${hashedTable[key]}`);
        delete hashedTable[key];
        displayHashedTable();
    } else {
        alert("No customer found at this hashed number.");
    }
}

function displayHashedTable() {
    console.log("Updated Hashed Table:");
    for (let key in hashedTable) {
        console.log(`${parseInt(key) + 1}. ${hashedTable[key]}`);
    }
}
