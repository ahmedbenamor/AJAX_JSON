$('#search').keyup(function(){
var serchField = $('#search').val();
var myExp = new RegExp(serchField,'gim');
$.getJSON('data.json', function(data){
	var output = '<ul class="searchresulr">';
	$.each(data, function(key, val){
		if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1))
		{
		     output +='<li>' ;
		     var namemodif = val.name.replace(myExp,'<SPAN style="background-color:yellow">'+serchField+'</SPAN></FONT>');
		     output += '<h2>' + namemodif + '</h2>';
		     output += '<img src="images/'+val.shortname+'_tn.jpg" alt="'+val.name+'" />';
		     var biomodif = val.bio.replace(myExp,'<SPAN style="background-color:yellow">'+serchField+'</SPAN></FONT>');
		     output += '<p>'+biomodif+'</p>';
		     output += '</li>';
     	}

	});
output +='</ul>';

$('#update').html(output);
});

});
