//myspec --

// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("FizzBuzz", function() {

	it("should return Fizz for multibles of three", function () {
		var result = fizzBuzz.getResult(3);
		expect(result).toEqual("Fizz");
	});

	it("should return Buzz for multibles of five", function () {
		var result = fizzBuzz.getResult(5);
		expect(result).toEqual("Buzz");
	});

	it("should return FizzBuzz for multibles of three and five", function () {
		var result = fizzBuzz.getResult(15);
		expect(result).toEqual("FizzBuzz");
	});

	it("should return the number for non-multibles of three and five", function () {
		var result = fizzBuzz.getResult(7);
		expect(result).toEqual("7");
	});

	it("should return the '0' for zero", function () {
		var result = fizzBuzz.getResult(0);
		expect(result).toEqual("0");
	});

});