<!DOCTYPE html>
<html>

	<head>
		<?php require_once('requeridos/tags.php'); ?>
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/diseno-gr.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:501px) and (max-width:900px)" href="estilos/diseno-md.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:800px)" href="estilos/diseno-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />
	</head>

	<body>
		<?php include_once("analytics.php"); ?>

		<div id="cnt-titulo" class="fondo_azul">

			<div id="lg-andimier">
				<a href="./"><img alt="andimier diseño gráfico" src="imagenes/lg-andi-grafico.png" /></a>
			</div>
		</div>

		<div id="franja-info">
			<div class="ttprincipal">
				<h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>
			</div>

			<div id="rayo-info"></div>
			<div class="circle-bottom bk-white"></div>
		</div>

		<div class="cnt-proyectos">
			<div class="fila1"></div>
		</div>

		<?php require_once("requeridos/elementos.php"); ?>
	</body>

	<?php include_once("requeridos/set-idioma.php"); ?>
	<script src="js/listados/listado-diseno-grafico.js"></script>
	<script src="js/diseno-grafico.js"></script>

	<script>
		var seccion = 'diseño gráfico';
		var imgLogo = 'url(imagenes/logoandimier4.png)';
		var colortitulo = '';
		var tonodefondo = 'medio';
	</script>

	<script src="js/menusecciones.js"></script>
</html>
