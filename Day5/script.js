
var request;
if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
	console.log("request = new XMLHttpRequest();");
}else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
	console.log("request = new ActiveXObject(Microsoft.XMLHTTP)");
}
request.open('GET','data.xml');
request.onreadystatechange = function(){
if((request.status === 200) && (request.readyState === 4))
{
	var items =
	request.responseXML.getElementsByTagName('name');
	
	var output = '<ul>'
	for(var i = 0 ; i< items.length ; i++)
	{

		output += '<li>';
		output += items[i].firstChild.nodeValue;
		output += '</li>';
	}
	output += '</ul>';
	document.getElementById('update').innerHTML = output ;
}

}

request.send();
