var btt = document.getElementById('load');
btt.onclick = loadAjax;
function loadAjax(){
			var request;
		if(window.XMLHttpRequest){
			request = new XMLHttpRequest();
			console.log("request = new XMLHttpRequest();");
		}else {
			request = new ActiveXObject("Microsoft.XMLHTTP");
			console.log("request = new ActiveXObject(Microsoft.XMLHTTP)");
		}
		request.open('GET','data.json');
		request.onreadystatechange = function(){
		if((request.status === 200) && (request.readyState === 4))
		{
			var items =
			JSON.parse(request.responseText);
			
			var output = '<ul>'
			for(var key in items)
			{
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output ;
		}

		}

		request.send();

}
