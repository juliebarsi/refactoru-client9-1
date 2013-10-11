//newspec -- 

var fizzBuzz = function() {

	var getResult = function(number) {
		if (isMultipleOfThree(number) && isMultipleOfFive(number))
			return "FizzBuzz";
		if (isMultipleOfThree(number))
			return "Fizz";
		if (isMultipleOfFive(number))
			return "Buzz";
		return number.toString();
	};

	var isMultipleOfThree = function (number) {
		return number % 3 == 0 && number != 0;
	}

	var isMultipleOfFive = function (number) {
		return number % 5 == 0 && number != 0;
	}

	return {
			getResult: getResult
	};

} ();