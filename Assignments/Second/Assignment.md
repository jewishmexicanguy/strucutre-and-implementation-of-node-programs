# Goal

This assignment will be about importing libraries into a module script.

Additionally we will go over the differnce between synchrnous programming and asynchrnous programming

Furthermore this will introduce you to the topic of string manipulations

libMe.mjs is a module library in this regard
runMe.mjs is the module script

# Assingment

- Write a script that calcultes 1000 random numbers, from 1 - 1,000,000 and *appends* them to numbers.txt with one number on each line.

- write a module with a function that appends to a file called calculations.txt

- write a module script that imports the above function and uses it to append the string 'BEGGINING CALCULATIONS ON : <this date and time>'

- write a module function that appends to calculations.txt and writes 'ENDING CALCULATIONS ON : <this date and time>' and use it in the module script

- Research the difference between what an synchronous and asynchrnous process is in Node and write your explanation in a file called explanation.md

- write a module function that synchrnously reads the contents of the file numbers.txt 

- write a module function that can seperate each line into it's own string

- Write a module function that seperates the lines that are numbers from numbers.txt

- Write a module function that accepts and array of numbers and  returns the sum of all items in the array 

- Write uses the function above that to write the summation of all the numbers to one line in calculations.txt sandwiched between the BEGGINING CALCULATIONS and ENDING CALCULATIOINS lines

# Reference material

Read only through 'Using official ES module support' 
https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/

Working with strings, spcifically splitting them
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

Callback, asynchrnous readfile
https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

Synchronous readfile
https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

Regular expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions