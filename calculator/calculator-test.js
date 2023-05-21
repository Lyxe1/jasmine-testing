
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 5,
    rate: 5,
  };
  const monthlyPayment = calculateMonthlyPayment(values);
  const expectedMonthlyPayment = '188.71';
  assert.equal(monthlyPayment, expectedMonthlyPayment);
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10000,
    years: 5,
    rate: 5,
  };
  const monthlyPayment = calculateMonthlyPayment(values);
  const decimalPlaces = monthlyPayment.split('.')[1].length;
  assert.equal(decimalPlaces, 2);
});

/// etc
