	
	
	function validateForm(){
	
		var email = document.forms["formulario"]["email"].value;
		var atpos  = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		
		var x = document.forms["formulario"]["nombre"].value; 
		var y = document.forms["formulario"]["email"].value; 
		var z = document.forms["formulario"]["mensaje"].value;
		
		var camposarr = [x,y,z];
		var c = 0;
		var error = false;	
		
		while( c < camposarr.length){
			if(camposarr[c] == ''){
				alert( "Por favor llena los campos" );
				error = true;
				//break;
				return false;
			}
			c++;
		}
		
		if(error == false){
			alert('Gracias, te contactaremos prontamente');
		}
		
		//if( x == '' && y == '' && z == ''){
		//	
		//	alert( "Por favor ingresa un correo electrónico" );
		//}
		//
		//if (atpos<1 || dotpos < atpos+2 || dotpos+2 >= email.length){
		//  alert( "El correo que ingresaste no es valido" );
		//  return false;
		//}
		
		//if ( x == null || x == "" ){
		//  alert("Por favor escribe tu nombre");
		//  return false;
		//}else if ( y == null || y == "" ){
		//	alert("Por favor escribe un teléfono");
		//	return false;
		//}
		
		
	}
		