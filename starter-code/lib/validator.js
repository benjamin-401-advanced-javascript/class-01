'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /
// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too
validator.isValid = (input, rules) => {

  if (rules === 'strings') {
    return typeof input === 'string';
  }

  if (rules === 'numbers') {
    return typeof input === 'number';
  }

  if (rules === 'arrays') {
    return Array.isArray(input);
  }

  if (rules === 'objects') {
    return typeof input === 'object';
  }

  if (rules === 'booleans') {
    return typeof input === 'boolean';
  }

  if (rules === 'functions') {
    return typeof input === 'function';
  }

};

/**
 * Array contains all the same types?
 * @param arr
 * @returns {boolean}
 */

validator.arrayOfSameTypes = (arr) => {
  const typeArr = arr.map(e => typeof e);
  const lengthArr = [];
  for (let i = 0; i < typeArr.length; i++) {
    if (i === 0) lengthArr.push(typeArr[i]);
    if (!lengthArr.includes(typeArr[i])) lengthArr.push(typeArr[i]);
  }
  return lengthArr.length === 1;
};

/**
 * validates a value array against an approved list
 * @param valueArr
 * @param approvedList
 * @returns {boolean}
 * 
 */

validator.arrayInArray = (valueArr, approvedList) => {
  let flag = true;
  valueArr.forEach(element => {
    if (!approvedList.includes(element))
      flag = false;
  });
  return flag;
};

/**
 * Does obj has property?
 * @param obj
 * @param property
 * @returns {boolean}
 */

validator.hasProperty = (obj, property) => {
  return obj.hasOwnProperty(property);
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};





