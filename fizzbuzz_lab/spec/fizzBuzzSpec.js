'use strict'
var fizzBuzz = require("../app/fizzBuzz.js");

describe("Fizz Buzz tests ", function(){
	it("should return 'Fizz' for number divisible by 3", function(){
		
		expect(fizzBuzz.fizzBuzz(3)).toBe('Fizz');
	});

	it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz.fizzBuzz(5)).toBe('Buzz');
  });

	it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return 53 since it is indivisible by 5 and 3", function() {
    expect(fizzBuzz.fizzBuzz(53)).toBe(53);
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 33", function() {
    expect(fizzBuzz.fizzBuzz(33)).toBe('Fizz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 9", function() {
    expect(fizzBuzz.fizzBuzz(9)).toBe('Fizz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz.fizzBuzz(101)).toBe(101);
  });

  it("should return 'FizzBuzz' since its divisible by 3 and 5", function() {
    expect(fizzBuzz.fizzBuzz(120)).toBe("FizzBuzz");
});

});