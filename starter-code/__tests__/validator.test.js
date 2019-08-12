'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isValid(str, 'numbers')).toBeFalsy();
    expect(validator.isValid(num, 'numbers')).toBeTruthy();
    expect(validator.isValid(arr, 'numbers')).toBeFalsy();
    expect(validator.isValid(obj, 'numbers')).toBeFalsy();
    expect(validator.isValid(func, 'numbers')).toBeFalsy();
    expect(validator.isValid(bool, 'numbers')).toBeFalsy();
  });

  it('arrays', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isValid(str, 'arrays')).toBeFalsy();
    expect(validator.isValid(num, 'arrays')).toBeFalsy();
    expect(validator.isValid(arr, 'arrays')).toBeTruthy();
    expect(validator.isValid(obj, 'arrays')).toBeFalsy();
    expect(validator.isValid(func, 'arrays')).toBeFalsy();
    expect(validator.isValid(bool, 'arrays')).toBeFalsy();
  });

  it('objects', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isValid(str, 'objects')).toBeFalsy();
    expect(validator.isValid(num, 'objects')).toBeFalsy();
    expect(validator.isValid(arr, 'objects')).toBeTruthy();
    expect(validator.isValid(obj, 'objects')).toBeTruthy();
    expect(validator.isValid(func, 'objects')).toBeFalsy();
    expect(validator.isValid(bool, 'objects')).toBeFalsy();
  });

  it('booleans', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isValid(str, 'booleans')).toBeFalsy();
    expect(validator.isValid(num, 'booleans')).toBeFalsy();
    expect(validator.isValid(arr, 'booleans')).toBeFalsy();
    expect(validator.isValid(obj, 'booleans')).toBeFalsy();
    expect(validator.isValid(func, 'booleans')).toBeFalsy();
    expect(validator.isValid(bool, 'booleans')).toBeTruthy();
  });

  it('functions', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isValid(str, 'functions')).toBeFalsy();
    expect(validator.isValid(num, 'functions')).toBeFalsy();
    expect(validator.isValid(arr, 'functions')).toBeFalsy();
    expect(validator.isValid(obj, 'functions')).toBeFalsy();
    expect(validator.isValid(func, 'functions')).toBeTruthy();
    expect(validator.isValid(bool, 'functions')).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    let childObj = {
      childProp: 'this is a string'
    }
    let parentObj = {
      property1: 'this is a string',
      property2: childObj
    }

    expect(validator.hasProperty(parentObj, 'nope')).toBeFalsy();
    expect(validator.hasProperty(parentObj, 'property1')).toBeTruthy();
    expect(validator.hasProperty(parentObj, 'property2')).toBeTruthy();
    expect(validator.hasProperty(childObj, 'childProp')).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    let childObj = {
      childProp: 'this is a string'
    }

    expect(validator.isString(childObj.childProp)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    const arr1 = ['dsaf', 'sdh', 'sdgjr']
    const arr2 = [3, 6, 956, 24, 236557754256]
    const arr3 = [3, 6, 956, 'dsaf', 'sdh']

    expect(validator.arrayOfSameTypes(arr1)).toBeTruthy();
    expect(validator.arrayOfSameTypes(arr2)).toBeTruthy();
    expect(validator.arrayOfSameTypes(arr3)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const canBe = ['sad', 1, 'happy', 999]
    const arr1 = ['sad', 1]
    const arr2 = [3, 6, 956, 24, 236557754256]
    const arr3 = [3, 6, 956, 'dsaf', 'sdh']


    expect(validator.arrayInArray(arr1, canBe)).toBeTruthy();
    expect(validator.arrayInArray(arr2, canBe)).toBeFalsy();
    expect(validator.arrayInArray(arr3, canBe)).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

