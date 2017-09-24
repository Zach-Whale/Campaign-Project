var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost/project/data.json");
xhttp.onload = function(){
	console.log(xhttp.responseText);
};


xhttp.send();