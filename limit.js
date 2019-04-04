function skip() { 
	document.write("<br>") 
} 
function show(text) { 
	document.write(text) 
	skip()
} 
var limit=parseFloat(prompt("please input a full and psotive number here and we will show you what is the factorial of that number"))
var h=1 
if(limit > 0) { 
	for(var n = 1 ; n <= limit ; n++) { 
		h=h*n 
	}
} 
if(limit == 0) { 
	h=1
} 
show(limit + "!=" + h)  
