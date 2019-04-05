function skip() { 
	document.write("<br>")
} 
function show(text) { 
	document.write(text) 
	skip()
} 
var want=parseFloat(prompt("you want the fibonacchi sequence until which term")) 
var term1=0 
var term2=1   
var term3;
if(want == 1) { 
	document.write("(" + term1 + ")") 
}
if(want > 0 && want != 1 && want != 0) {   
	document.write("(" + term1 + "," + term2 )
	for(var n =3; n <= want; n++) { 
		term3=term1 +term2 
		document.write( ", " + term3) 
		term1=term2 
		term2=term3
	} 
	document.write(")")
} 
if(want < 0 || want == 0)  { 
	show("<h1>sorry thats not a possible term</h1>")
}