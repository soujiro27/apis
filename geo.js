



$(document).on('ready',localizar);


function localizar()
{
	navigator.geolocation.getCurrentPosition(localizacion);

	if(navigator.vibrate)
	{
		navigator.vibrate(10000)
	}
	else{
		alert("tu jefa no vibra");
	}

	$('section').append(localStorage["nombre"]);
	$('button').on('click',guardar);
}


function localizacion(parametros)
{
	var latitud=parametros.coords.latitude;
	var longitud=parametros.coords.longitude;
map = new google.maps.Map(document.getElementById('mapa'), {
          center: {lat: latitud, lng: longitud},
          zoom: 16
        });
	//$('div').html('<p>'+latitud+','+longitud+'</p>');	

}




function guardar()
{

	localStorage["nombre"]=$('input').val();
	$('section').append(localStorage["nombre"]);
}












