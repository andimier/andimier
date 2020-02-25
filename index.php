<?php
	require_once('requeridos/elementos-arr.php');
	
	function getLinkIdioma($valor, $idioma, $arg){
		
		$uri = array();
		
		for($i=0;$i<2;$i++){
			//if($i!=$idioma){
				array_push($uri, $arg[$i]['uri']);
			//}
		}
	
		return $uri;
	}

	function getIdioma($_uri, $elm_arr){
		$_uri = str_replace('/andimier','', $_uri);
		$idiomas = 2;
		$idioma = NULL;
		$lgj = 'es';
		$idioma = 0;
		$linkactual = NULL;
		$archivo = NULL;
		$lkidiomas = NULL;
		
		foreach ($elm_arr as $arg) { 
			for($i = 0; $i < $idiomas; $i++){
				if ($arg[$i]['uri'] == $_uri || $arg[$i]['uri'] . '/' == $_uri) {
					$archivo = $arg[$i]['archivo'];
					$linkactual = $arg[$i]['uri'];
				
					if ($i > 0) {
						$lgj = 'en';
						$idioma = 1;
						$linkactual = $arg[$i]['uri'];
					}
					
					$lkidiomas = getLinkIdioma($idiomas, $idioma, $arg);
					
					break;
				}
			}
		}
	
		return array($lgj, $archivo, $idioma, $linkactual, $lkidiomas);
	}

	function getCurrentPageName() {
		$current_uri = $_SERVER['PHP_SELF'];
		$arr = explode('/', $current_uri);

		return  preg_replace('/.php/', '', end($arr));
	}

	function getPage($current_page, $lang) {
		global $elm_arr;

		$page = $current_page === 'index' ? 'inicio' : $current_page;

		return $elm_arr[$page][$lang]['archivo'];
	}

	function getURI($current_page, $lang) {
		global $elm_arr;

		$page = $current_page === 'index' ? 'inicio' : $current_page;

		return $elm_arr[$page][$lang]['uri'];
	}

	function getURIs($current_page) {
		global $elm_arr;

		$page = $current_page == 'index' ? 'inicio' : $current_page;
		
		return [
			$elm_arr[$page][0]['uri'],
			$elm_arr[$page][1]['uri']
		];
	}

	function getLang() {
		if (strpos($_SERVER['PHP_SELF'], 'en/')) {
			return 1;
		}

		return 0;
	}
	
	
	$_uri = strtolower($_SERVER['REQUEST_URI']); 
	$valores = getIdioma($_uri, $elm_arr);
	$lgj = $valores[0];

	$currentPageName = getCurrentPageName();
	$archivo = getPage($currentPageName, getLang());
	$seccion = getCurrentPageName();
	//$seccion = str_replace(".php", "", $valores[1]);

	$idioma = getLang();
	//$linkactual = str_replace("/", "", $valores[3]);
	$linkactual = getURI($currentPageName, getLang());

	// $lkidiomas = $valores[4];
	$lkidiomas = getURIs($currentPageName);
	
	
	date_default_timezone_set('America/Bogota');
	$hoy = date("F j, Y, g:i a");

?>
<?php require_once("cpo/".$archivo); ?>

