const prompt = require("prompt-sync")()
	
	//declare kelvin variable to 293
	var kelvin=293;
		
	//celsius declaration	
	var Celsius;
	
	//function of converting kelvin to celsius (celsius function with kelvin parameter)
	function Celsius(Kelvin){
		return kelvin-273;
	}
	console.log(Celsius());


	//declare fahrenheit and celsius variables
	var fahrenheit;
	Celsius=273;
	function fahrenheit(Celsius){

		// converting celsius to fahrenheit
		return Celsius*(9/5)+32;

	}
	//getting output on console.log on fahrenheit is empty because celsius was declare above celsius=273
	console.log(fahrenheit());

	
	//around built-in math function to fahrenheit to remove decimal 
	fahrenheit=Math.floor(fahrenheit);
	console.log(fahrenheit);
	
	console.log("The temperature is "+fahrenheit+" Fahrenheit");

	//kelvin in fahrenheit ,change value of kelvin to 0 farhenheit value ?


	//function of fahrenheit to find it's value
	//formula is  F = 1.8*(K-273) + 32.
	function fahrenheit(kelvin){
		return  F = 1.8*(kelvin-273) + 32;
	}
	//console.log output our kelvin value is 0
	console.log(fahrenheit(0));

	//value of fahrenheit is (-459.4 fahrenheit) 



	//convert celsius to newton
	function Newton(Celsius){
		return Celsius*(33/100);
	}

	console.log(Math.floor(Newton(273)))