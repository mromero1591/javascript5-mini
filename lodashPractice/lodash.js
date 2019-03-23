var customers = [
  {
    id: 1,
    first_name: "Gisele",
    last_name: "Norquay",
    email: "gnorquay0@mapy.cz",
    bitcoin_address: "1CysX3bL3EqV4fEEzgrhhRyMwDNCoSduCD"
  },
  {
    id: 2,
    first_name: "Abram",
    last_name: "Candelin",
    email: "acandelin1@cafepress.com",
    bitcoin_address: "1Fn6SApcGLTLJPxeSothGekqZDpsS9yz9W"
  },
  {
    id: 3,
    first_name: "Clarance",
    last_name: "Erett",
    email: "cerett2@multiply.com",
    bitcoin_address: "1FRAfJeAswuZMqfYnUZeWr9GyLHK4jk74"
  },
  {
    id: 4,
    first_name: "Mireille",
    last_name: "Mattiuzzi",
    email: "mmattiuzzi3@npr.org",
    bitcoin_address: "192BUVYj1nSpjtjcpc5bVEPfBF2hVs2Mq6"
  },
  {
    id: 5,
    first_name: "Brandais",
    last_name: "Fosdick",
    email: "bfosdick4@redcross.org",
    bitcoin_address: "15LqYGZLvA9znt6GYePh6Pm47cFsczLTCV"
  },
  {
    id: 6,
    first_name: "Micheil",
    last_name: "Igounet",
    email: "migounet5@pcworld.com",
    bitcoin_address: "1Kd9LBx59cGZXMQ1YsyppZaNX5umWjBxeP"
  },
  {
    id: 7,
    first_name: "Sheba",
    last_name: "Bwye",
    email: "sbwye6@slideshare.net",
    bitcoin_address: "1HToZvUD2KMYJdiV94S7dNzDBfccbKwXsh"
  },
  {
    id: 8,
    first_name: "Melli",
    last_name: "Chinge de Hals",
    email: "mchingedehals7@delicious.com",
    bitcoin_address: "1QFDGuHCnZtUUb3prTuWYK15inYmimYmwL"
  },
  {
    id: 9,
    first_name: "Edita",
    last_name: "Houldin",
    email: "ehouldin8@flavors.me",
    bitcoin_address: "157v5xb9qjDQKp85V3ZMXdhudX8MNbm3TL"
  },
  {
    id: 10,
    first_name: "Inness",
    last_name: "Durrad",
    email: "idurrad9@indiatimes.com",
    bitcoin_address: "1ErLV7m1ARgf9Y1mbWWqnEiFtZnDyrjzUP"
  }
];

// Create an array of all email addresses
// first without using lodash's map (with property argument) method, then with it.

//CODE HERE
const emails = customers.map( customer => {
  return customer.email;
});

const lodashEmails = _.map(customers,'email');

var inviteList1 = ["Ed", "Fanny", "Mildred", "Alice", "James"];
var inviteList2 = ["Jake", "Mildred", "Jimmy", "Ed", "Franklin"];

// Uh oh! We are having a party and two invite lists were created.
// Create a duplicate-free list of the people we want at the party without lodash's _.union().
// Then create another list that removes all duplicates using _.union().
function getNewList(listOne, listTwo) {
  const newList = [...listOne];

  for(let i = 0; i < listTwo.length; i++) {
    if(!newList.includes(listTwo[i])) {
      newList.push(listTwo[i]);
    }
  }
  return newList;  
}
const newList = getNewList(inviteList1, inviteList2);

//Lodash
const lodashNewList = _.union(inviteList1, inviteList2);


var friendsOfJim = [
  "Tom",
  "Carina",
  "Rex",
  "Jane",
  "Greg",
  "Nancy",
  "Alison",
  "Goose"
];
var friendsOfBetty = [
  "Burt",
  "Dave",
  "Tina",
  "Biggie",
  "Rex",
  "Carina",
  "Victoria",
  "Tom",
  "Nancy"
];

// Jim and Betty are having a party, but they only want to invite mutual friends.
// Create an array of mutual friends. First without using lodash.
// Then using lodash's _.intersection().

function findMutualFriends(arrays) {
  //set the mutual friends equal to the first argument
  const mutualFriends = arguments[0];
  let length = mutualFriends.length;
  //loop thorugh the remaining arrays
  for(let i = 1; i < arguments.length; i++) {
    //loop through the mutual firends array.
    for(let j = 0; j < length; j++) {
      //if the firend is not one of the other arrays then remove it
      if(!arguments[i].includes(mutualFriends[j])) {
        mutualFriends.splice(j, 1, false);
      }
    }
  }
  const finalList = mutualFriends.filter( friend => {
    return friend;
  })
  return finalList;
}

const mutualFriends = findMutualFriends(friendsOfJim, friendsOfBetty);

const lodashMutualFriends = _.intersection(friendsOfJim, friendsOfBetty);


var purchases = [
  {
    company: "Dunder Mifflin",
    order: 1000
  },
  {
    company: "Staples",
    order: 400
  },
  {
    company: "Dunder Mifflin",
    order: 200
  },
  {
    company: "Dunder Mifflin",
    order: 900
  },
  {
    company: "Dunder Mifflin",
    order: 1800
  },
  {
    company: "Staples",
    order: 1200
  },
  {
    company: "Staples",
    order: 2400
  },
  {
    company: "Dunder Mifflin",
    order: 5000
  }
];

// First, group the purchases by company without lodash
// then do it again using _.groupBy()

function groupBy(purchases) {
  const group = {};

  //loop through the purchase, and pull out all the companies.
  for(let i = 0; i < purchases.length; i++) {
    const company = purchases[i].company;
    //if the object doesnt have the company as a prop. then add it
    if(!group.hasOwnProperty(company)) {
      group[company] = [];
      group[company].push(purchases[i]); 
    } else {
      group[purchases[i].company].push(purchases[i]);
    }
  }

  return group;
}

const group = groupBy(purchases);

const lodashGroup = _.groupBy(purchases, 'company');