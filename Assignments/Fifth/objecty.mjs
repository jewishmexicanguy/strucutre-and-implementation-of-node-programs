var a = {
  z: 1,
  y: 5,
  x: 'll'
};

var b = 'z';

console.log(a);
console.log(a['z']); // ---> console.log(1) ---> 1
console.log(a[b]); // ---> console.log(a['z']) ---> console.log(1) ---> 1

a[b] = 'lol'; // ---> a['z'] = lol 
console.log(a[b]); // ---> console.log(a['z']) ---> console.log('lol') ---> lol 


var c = {b}; // ---> c = {b:eval(b)} ---> c = {b:'z'}
c.d = a[b];
c[c.d] = a[b];
var d = {_:c.d}; // ---> d = {?:eval(c.d)} ???
console.log(c);
console.log(d);