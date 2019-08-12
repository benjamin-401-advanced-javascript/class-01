'use strict';

const validator = require('./lib/validator');


let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = { x: 'y' };
let func = () => { };
let bool = false;

console.log(validator.isString(str));
console.log(validator.isString(num));

console.log(validator.isValid(obj, 'numbers'));
console.log(validator.isValid(func, 'numbers'));

console.log(validator.isValid(func, 'arrays'));
console.log(validator.isValid(arr, 'arrays'));

console.log(validator.isValid(obj, 'objects'));
console.log(validator.isValid(func, 'objects'));

console.log(validator.isValid(func, 'booleans'));
console.log(validator.isValid(bool, 'booleans'));

console.log(validator.isValid(obj, 'functions'));
console.log(validator.isValid(func, 'functions'));


