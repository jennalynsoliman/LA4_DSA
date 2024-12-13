function hashFunction(name) {
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash += name.charCodeAt(i);
    }
    return hash % 5; // Assuming a queue of size 5
  }
  
  const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
  const queue = new Array(5).fill(null);
  
  // Hash customers and add to queue
  for (let i = 0; i < customers.length; i++) {
    const hashValue = hashFunction(customers[i]);
    queue[hashValue] = customers[i];
  }
  
  console.log("Initial Queue:");
  console.log(queue);
  
  // Simulate customer service
  function serveCustomer() {
    const number = prompt("Enter the number of the customer to serve:");
    const index = number - 1;
  
    if (queue[index] !== null) {
      console.log(`Serving customer: ${queue[index]}`);
      queue[index] = null;
      console.log("Updated Queue:");
      console.log(queue);
    } else {
      alert("No customer with that number."); // When the ueser entered a number that is not even in the queue or a customers num
    }
  }
  
  // Repeatedly serve customers
  while (queue.some(customer => customer !== null)) {
    serveCustomer();
  }
  
  console.log("Queue is empty."); //this print whwn the queue is already empty
  