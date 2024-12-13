let customerList = []; //Array to store customer names

//to add customer at the end of the queue
function addCustomer(name) {
  customerList.push(name);
}

//to remove and return the customer at the front of queue
function removeCustomer() {
  if (customerList.length === 0) {
    return null;
  }
  return customerList.shift();
}

//to display current queue
function showQueue() {
  console.log("Here's the current queue:");
  for (const [index, customer] of customerList.entries()) {
    console.log(`${index + 1}. ${customer}`);
  }
}


//customers to the queue
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

//loop to process customer service
//customer service representative role
while (customerList.length > 0) {
  showQueue();
  //prompt to enter the number of the customer to serve and will reveal the name of the customer in the queue   
  let customerNum = parseInt(prompt("Which customer number should we help next?"));

  if (customerNum > 0 && customerNum <= customerList.length) {
    let customerName = removeCustomer(); // remove it in the queue
    console.log(`${customerName} is being helped now.`); // this print or logged together with the name of the customer in the queue when being process or helped
  } else {
    console.log("Invalid number. Please enter a valid number."); //if the number entered is not in  the queue
  }
}
  
console.log("Everyone has been helped! Queue is empty.");