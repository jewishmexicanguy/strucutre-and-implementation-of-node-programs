import fs from 'fs';

const mod1 = () => {
  return 'this is module mod1 and is the default export fo this module';
};

export default mod1;

export const func = () => {
  return 'this is func within mod1';
};

/**
 * Adds paramter b to a
 * @param {} a, number to be added to
 * @param {} b, number to add to paramter b
 * @returns {number} result of adding b to a numbers
 */
function add (a, b) {
  return a + b;
}

/**
 * Subracts parameter b from parameter b
 * @param {number} a, number to be added  
 * @param {number} b, number to subtract from a 
 * @returns {number} result of subtraction
 */
function subtract (a, b) {
  return a - b;
}

export const BasicMath = {
  add,
  subtract
};

export const readFromFileSynchronously = (path) => {
  /**
   * https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
   */
  return fs.readFileSync(path, 'utf-8');
};

export const readFromFileAsynchronously = (path) => {
  let content = null;
  /**
   * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
   */
  fs.readFile(path, 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    content = data;
    return content;
  });
};