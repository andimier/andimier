<?php
	require_once('requeridos/elementos-arr.php');

	function getCurrentPageName() {
		$query_string = $_SERVER['QUERY_STRING'];
		$arr = explode('=', $query_string);
		$page = end($arr);

		if (empty($page)) {
			return 'inicio';
		}

		return $page;
	}

	function getPage($sectionName, $lang) {
		global $elm_arr;

		return $elm_arr[$sectionName][$lang]['archivo'];
	}

	function getURI($sectionName, $lang) {
		global $elm_arr;

		return $elm_arr[$sectionName][$lang]['uri'];
	}

	function getURIs($sectionName) {
		global $elm_arr;

		return [
			$elm_arr[$sectionName][0]['uri'],
			$elm_arr[$sectionName][1]['uri']
		];
	}

	function getLang() {
		$lg = [
			"lang-val" => 0,
			"lang-str" => "es"
		];

		if (strpos($_SERVER['PHP_SELF'], 'en/')) {
			$lg['lang-val'] = 1;
			$lg['lang-str'] = 'en';
		}

		return $lg;
	}

	function getSection($currentPageName) {
		return $currentPageName == 'index' ? 'inicio' : $currentPageName;
	}

	$lang = getLang();
	$lgj = $lang['lang-str'];
	$idioma = $lang['lang-val'];

	$currentPageName = getCurrentPageName();
	$sectionName = getSection($currentPageName);
	$seccion = $sectionName;

	$archivo = getPage($sectionName, $idioma);
	$linkactual = getURI($sectionName, $idioma);
	$lkidiomas = getURIs($sectionName);

	date_default_timezone_set('America/Bogota');
	$hoy = date("F j, Y, g:i a");

	require_once("cpo/".$archivo);
?>
