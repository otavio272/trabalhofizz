function fizzbuzz_exec() { 

	for (i=0;i<=100;i++){

		numero = fizzBuzz(i); 

		console.log(numero); 

	} 

} 

function fizzBuzz(numero) {

	if (numero % 3 == 0 && numero % 5 == 0)
		return "FizzBuzz";
	if (numero % 3 == 0)
		return "Fizz";
	if (numero % 5 == 0)
		return "Buzz";
	return numero;

}
