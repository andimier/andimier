<?php
	
	function getIdioma($_uri){

		$_uri2 = str_replace('/andimier','', $_uri);
		$_uri3 = str_replace(' ','', $_uri2);
		
		$_uri_arr = explode('/', $_uri3);
		
		for($i=0;$i<count($_uri_arr);$i++){
			
			if($_uri_arr[$i]=='grafico' || $_uri_arr[$i].'/'=='grafico/' || $_uri_arr[$i]=='graphic' || $_uri_arr[$i].'/'=='graphic/'){
				$del = $_uri_arr[$i];
				if($del=='grafico'){
					$lgj = 'es';
					$idioma = 0;
				}else if($del=='graphic'){
					$lgj = 'en';
					$idioma = 1;
				}
				break;
			}

		}
		
		$archivo = end($_uri_arr);
		return array($lgj, $idioma, $archivo, $del);
	}
	
	
	$_uri = strtolower($_SERVER['REQUEST_URI']); 
	//$_SERVER['HTTP_ACCEPT_LANGUAGE'];
	$valores  = getIdioma($_uri);
	$lgj      = $valores[0];
	$idioma   = $valores[1];
	$del      = $valores[3];
	$archivo  = $valores[2];
	$cliente  = str_replace('-', ' ', $archivo);
?>


<?php require_once('cpo/diseno-grafico-proyecto.php');