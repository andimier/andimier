	function validateForm(){

		var email = document.forms["formulario"]["email"].value;
		var atpos  = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		
		var x = document.forms["formulario"]["nombre"].value; 
		var y = document.forms["formulario"]["email"].value; 
		var z = document.forms["formulario"]["mensaje"].value;

		
		if (atpos<1 || dotpos < atpos+2 || dotpos+2 >= email.length){
		  alert( "El correo que ingresaste no es valido o está vacío" );
		  return false;
		}else if ( z == null || z == ""){
			alert("Por favor escribe un correo electrónico");
			return false;
		}
		
		if ( x == null || x == "" ){
		  alert("Por favor escribe tu nombre");
		  return false;
		}else if ( y == null || y == "" ){
			alert("Por favor escribe un teléfono");
			return false;
		}
	}