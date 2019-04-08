function skip() { 
	document.write("<br>")
} 
function show(text) { 
	document.write(text)
} 
a=[]
var i= 0  
var number=parseInt(prompt("say the number you want in binary"))
while(number > 0) { 
	arnaldo=number % 2 
	a[i]=arnaldo  
	i++ 
	number= Math.floor(number/2)
} 
for(var b=i-1; b >= 0 ; b=b-1) { 
	document.write(a[b]) 
} 