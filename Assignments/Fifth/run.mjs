// How to assign to javascript

var myObject = {}; // This is an empty object

console.log('the object should be empty ', myObject, '\n');

/**
 * Different ways to assign values to objects
 */

// the dot notation way to assign values
myObject.name = 'Joseph';

console.log(`myObject has a property called "name" with the value ${myObject.name}`, myObject, '\n');

// the key notation way to assign values
myObject['age'] = 29;

console.log(`myObject will now have an 'age' property with value ${myObject['age']}`, myObject, '\n');

// object properties can be overwritten with either
myObject['name'] = 'Luther';
myObject.age =  58;

console.log('properties can be changes using either one', myObject ,'\n');

// object property assignment will take whatever value you re assign it to be, even when resolving to another property.
myObject['name'] = myObject.age;

console.log('now the keys "name" and "age" will be the same', myObject, '\n');

// deleting properties
delete myObject.name;

console.log('now the "name" property is missing', myObject, '\n');

// delete using key notation

delete myObject['age'];

console.log('deleting using key notation, now "age" is missing', myObject, '\n');

// We can assign whatever we want to object properties
function foo() {
  console.log('you have reached foo!');
  return 'foo has returned!';
}

myObject.functor = foo;
myObject.functorEval = foo();
myObject.null = () => {};
console.log('functions can be called by property name, or key', myObject, '\n');

// however how you assign your object property is important, as assign a function invocation will assign the value of whatever that function returns if it returns anything at all.
console.log('calling myObject.functor()', myObject.functor());
console.log('what is myObject.functorEval', myObject.functorEval);
console.log('calling myObject.null', myObject.null);
console.log('calling a function in assigned to a property', myObject.null(), '\n');

// a very simple callback implementation, pay attention to order of operation
function a(x, y, special) {
  let sum = x + y;
  special(sum);
  return 'a function done!';
}

function stdOut(value) {
  console.log('printing ', value);
}

var result = a(5, 8, stdOut);
console.log('does result equal anything? ', result);

// now using an anonymous function
 result = a(45, 5, (value) => {
  value = value - 9;
  console.log('printing again ', value);
});
console.log('does result equal anything? ', result);

// now using a built-in while using a built-in.
console.log(a(99, 1, console.log));

// array assignment
var myArray = [];

myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(a);
myArray.push([
  a(1,2,console.log), 
  1
]);
myArray.push(myObject);

console.log(myArray);

// arrays are accessed using indices

console.log(myArray[0], myArray[5]);

// array accessing, get last element method one, WRONG

console.log(myArray[-1]);

// array accessing, get last element method two, WRONG

console.log(myArray[myArray.length]);

// array accessing, get last element method three

console.log(myArray[myArray.length - 1]);

// more complex object property assignment and 

myObject.array = myArray; // BAD!!

console.log(myObject);

// a complex object

var myComplex = {
  name: "Leo",
  status: {
    starSign: "Aquarius",
    health: "cancerous",
    mentalState: "worried",
    depravity: "high",
    morality: "middle",
    sexuality: "lecherous"
  },
  hospitalVisitDates: [
    '1-1-2021',
    '2-1-2021',
    '3-1-2021',
    '4-1-2021',
    [
      '5-1-2021', 
      '5-8-2021',
      '5-16-2021',
      '5-23-2021',
    ],
    '7-15-2021'
  ],
  drugTollerance: "high",
  'politicalAlignment': {
    economic: -35,
    authority: 15
  }
};

console.log('chap 1', myComplex);

// access only his political alignment

console.log('chap 1 political alignment ', myComplex.politicalAlignment);

// access only his hospital visits where he went only once in a month.

var hospitalVisitsOnceAMonth = [];

myComplex.hospitalVisitDates.forEach(i => {
  if (typeof i === 'string') {
    hospitalVisitsOnceAMonth.push(i);
  }
});

console.log(hospitalVisitsOnceAMonth);

// give me only the values that are objects

var chap1Objects = Object.keys(myComplex);
var chap1array = [];
chap1Objects.forEach(i => {
  if(typeof myComplex[i] === 'object' && !Array.isArray(myComplex[i])) {
    chap1array.push(myComplex[i]);
  }
});
console.log('only the objects',chap1array);
