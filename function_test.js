describe("calculator", function () {

	var a; //arrange
	var b; //arrange
	
	beforeEach(function() {
		a = 4; //arrange
		b = 2; //arrange
	});
		
	describe("sum", function() {
		it("When 4 and 2, should return 6", function () {
			var actual = calculator.sum(a,b); // act
			expect(actual).toEqual(6); //assert
		});
	});
	
	describe("substract", function() {
		it("When 4 and 2, should return 2", function () {
			var actual = calculator.substract(a,b); // act
			expect(actual).toEqual(2); //assert
		});
	});
	
	describe("squareRoot", function() {
		it("When 4 and 2, should return 4", function () {
			var actual = calculator.squareRoot(a,b);
			expect(actual).toEqual(4);
		});
		
		describe("multiply", function() {
		it("When 4 and 2, should return 8", function () {
			var actual = calculator.multiply(a,b);
			expect(actual).toEqual(8);
			});
		});
	});
});

