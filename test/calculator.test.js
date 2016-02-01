describe('Calculator', function() {
    it('should return sum of two parameters', function() {
        var calculator = new Calculator();
        var sum = calculator.add(1, 2);

        expect(sum).toBe(3);
    });
});
