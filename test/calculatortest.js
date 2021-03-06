module("calculator");

var calculator = new Calculator();

test("Calculator should not be undefined", function(assert){
	assert.ok( calculator != "undefined");
});

test("simple add", function(assert){
	var result = calculator.add(5, 3);
	equal(result, 8);
});

test("simple subtract", function(assert){
	var result = calculator.subtract(5, 3);
	equal(result, 2);
});

test("simple divide", function(assert){
	var result = calculator.divide(6, 3);
	equal(result, 2);
});

test("simple multiply", function(assert){
	var result = calculator.multiply(6, 3);
	equal(result, 18);
});
