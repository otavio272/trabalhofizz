describe("fizzBuzz", function() {
  
  it('TesteUnitario_1', () => {
    expect(fizzBuzz("1")).toBe('1');
	
  })
  
  it('TesteUnitario_2', () => {
    expect(fizzBuzz("2")).toBe('2');
	
  })
  
  it('TesteUnitario_3', () => {
    expect(fizzBuzz("3")).toBe('fizz');
	
  })
  
  it('TesteUnitario_4', () => {
    expect(fizzBuzz("4")).toBe('4');
	
  })
  
  it('TesteUnitario_6', () => {
    expect(fizzBuzz('6')).toBe("fizz");
	
  })
  
  
});
