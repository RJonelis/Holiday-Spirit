// Customer Data
let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};


function greetCustomer(name) {
  if (!customerData[name]) {
    // Case 1: New Visitor
    return `Welcome to the North Pole Café! Is this your first time? ❄️`;
  } else if (customerData[name].visits === 1) {
    // Case 2: First-Time Returner
    return `Ho ho ho! Welcome back, ${name}! We’re glad you enjoyed your first visit! 🎅`;
  } else {
    // Case 3: Repeat Visitor
    return `Merry greetings, ${name}! So wonderful to see you again! 🎄`;
  }
}
