<!DOCTYPE html>
<html>

	<head>
		<?php require_once('requeridos/tags.php'); ?>

		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:481px) and (max-width:800px)" href="estilos/general-md.css" />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:480px)" href="estilos/general-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/web-gr.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:800px)" href="estilos/web-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />

	</head>

	<body>
		<?php include_once("analytics.php"); ?>

		<div id="cnt-titulo" class="fondo_gris">
			<div id="lg-andimier">
				<a href="./"><img alt="andimier diseño gráfico" src="imagenes/lg-andi-web.png" /></a>
			</div>
		</div>


		<div id="franja-info">
			<div class="ttprincipal">
				<h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>
			</div>

			<div id="rayo-info"></div>
			<div class="circle-bottom bk-white"></div>
		</div>

		<div class="contenedor1"></div>

		<?php require_once('requeridos/elementos.php'); ?>

	</body>
	<?php include_once("requeridos/set-idioma.php"); ?>

	<script src='js/listados/listado-web.js'></script>
	<script src="js/web.js"></script>

	<script>
		var seccion = 'web';
		var colortitulo = '#d24750';
		var imgLogo = 'url(imagenes/logoandimier3.png)';
		var tonodefondo = 'claro';
	</script>

	<script src="js/elementos1.js"></script>
	<script src="js/menusecciones.js"></script>
</html>