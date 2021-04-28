import mod1 from './libMe.mjs';
import { func } from './libMe.mjs';
import { BasicMath, readFromFileSynchronously, readFromFileAsynchronously } from './libMe.mjs';


console.log(mod1());

console.log(func());

console.log(BasicMath.add(50, 51));

console.log(BasicMath.subtract(3, 31));

/**
 * Notice the difference in behaviour between these two
 */

console.log(readFromFileSynchronously('../Second/something.txt'));

console.log(readFromFileAsynchronously('../Second/something.txt'));