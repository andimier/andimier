<?php

	$mensaje2 = "";
	$message = "";

	if(isset($_POST['enviar'])) {
		

		$errores = array();
		$required_fields = array('nombre','email', 'mensaje');
		
		foreach($required_fields as $fieldname){
			
			if(!isset($_POST[$fieldname]) || (empty($_POST[$fieldname])  && !is_numeric($_POST[$fieldname]))){
				$errores[] = $fieldname;	
			}else{
				//echo count($errores);
			}
			
		}
		
		if(empty($errores)){
		
			$to = "proyectos@andimier.com";
			
			$subject = "ANDIMIER CONTACTO DESDE FORMULARIO";
			$nombre  = $_POST['nombre'];
			$mail    = $_POST['email'];
			//$tel     = $_POST['telefono'];
			$mensaje = $_POST['mensaje'];
			
			
			//===== INSERCION DEL CONTACTO EN BD=====================================//
			
			//$query = "INSERT INTO contactos (nombre, mail) VALUES ('$nombre', '$mail')";
			//$resultado = mysql_query($query, $connection);
			
			
			//====== Envio de datos ===============================================//
			
			$body = "
			<html>
				<body>
					<strong>INFO DE CONTACTO WWW.ANDIMIER.COM</strong>
					<br />
					
					<strong>Nombre:</strong> $nombre 
					<br />
					
					Correo: $mail 
					<br />
					<br />

					<strong>Mensaje:</strong> $mensaje
				</body>
			</html>";

			
			$message = "Tus datos han sido enviados correctamente!";

			$headers = "From: <{$mail}>\r\n";
			$headers .= "X-Mailer: PHP/" .phpversion(). "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

			mail($to, $subject, $body, $headers);


		}else{
			$message = "Datos incompletos, por favor llena los campos e intenta de nuevo!";
		}
	}

?>

