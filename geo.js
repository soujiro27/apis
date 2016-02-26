



$(document).on('ready',localizar);


function localizar()
{
	navigator.geolocation.getCurrentPosition(localizacion);

	if(navigator.vibrate)
	{
		navigator.vibrate(1000)
	}
	else{
		alert("tu jefa no vibra");
	}
}


function localizacion(parametros)
{
	var latitud=parametros.coords.latitude;
	var longitud=parametros.coords.longitude;
	$('div').html('<p>'+latitud+','+longitud+'</p>');	

}








