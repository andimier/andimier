<?php
	require_once('requeridos/elementos-arr.php');

	function get_utl_parts($_uri){
		$del = 'diseno-grafico';
		$lgj = 'es';
		$idioma = 0;

		$is_english = strpos($_uri, 'en/');

		if ($is_english) {
			$lgj = 'en';
			$idioma = 1;
		}

		$_uri_arr = explode('/', $_uri);
		$project = end($_uri_arr);

		return [
			'lang' => $lgj,
			'lang-id' => $idioma,
			'project' => $project,
			'url_section_directory' => $del
		];
	}

	$_uri = strtolower($_SERVER['REQUEST_URI']);

	$parts = get_utl_parts($_uri);
	$lgj = $parts['lang'];
	$idioma = $parts['lang-id'];
	$del = $parts['url_section_directory'];
	$cliente = str_replace('-', ' ', $parts['project']);
	$seccion = 'diseno-grafico';
	$section_title = $elm_arr['diseno-grafico'][$idioma]['tt-seccion'];
?>

<!DOCTYPE html>
<html>
	<head>
		<meta  http-equiv="Content-Type" content="text/html; charset=UTF-8" >
		<title></title>
		<meta name="viewport" content="width=device-width , initial-scale=1 , user-scalable=no"/>
		<meta name="title" content="" />
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="authos" content="www.andimier.com" />

		<?php require_once('requeridos/tags.php'); ?>

		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/proyectos.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/proyectos-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />
	</head>

	<body>

		<?php include_once("analytics.php"); ?>

		<div class="txt_proyectos">
			<h1 class="ltblanca"></h1>
			<h2 class="ltblanca"></h2>
			<p></p>
		</div>

		<div id="logo_proyectos"></div>
		<?php require_once('requeridos/menusecciones.php'); ?>
		<?php require_once('requeridos/contacto.php'); ?>
		<?php include_once("requeridos/menu-mv.php"); ?>
		<?php include_once("requeridos/idiomas-cnt.php"); ?>

	</body>

	<script src="js/listados/listado-diseno-grafico.js"></script>
	<script>
		var idioma = '<?php echo $lgj; ?>';
		var cliente = '<?php echo $cliente; ?>';
		var seccion = '<?php echo $section_title; ?>';
	</script>

	<script src="js/diseno-grafico-proyecto-elementos.js"></script>
	<script src="js/proyectos.js"></script>
	<script src="js/menusecciones.js"></script>
</html>