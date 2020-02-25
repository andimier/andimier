<!DOCTYPE html>
<html>

	<head>

		<?php require_once('requeridos/tags.php'); ?>
	
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/dibujo.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:500px) and (max-width:800px)" href="estilos/dibujo-md.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/dibujo-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />
	
	</head>
	
	
	<body>
	
		<?php include_once("analytics.php"); ?>
		
		
		<div id="cnt-titulo" class="fondo_gris">

			<div id="lg-andimier">
				<a href="./"><img alt="andimier diseño gráfico" src="imagenes/lg-andi-dibujo.png" /></a>
			</div>

			<div class="ttprincipal"><h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1></div>
			<p>portafolio</p>

		</div>

		<div id="cnt-dibujos"></div>
		<?php require_once('requeridos/elementos.php'); ?>
		
	</body>
	<?php include_once("requeridos/set-idioma.php"); ?>
	<script src="js/listados/listado-dibujo.js"></script>
	<script src="js/dibujo.js"></script>
	<script>
		
		var seccion = 'dibujo';
		var colortitulo = '#eee';
		var imgLogo = 'url(imagenes/logosecciones1.png)';
		var tonodefondo = 'claro';

	</script>
	<script src="js/elementos1.js"></script>
	<script src="js/menusecciones.js"></script>
	
	
</html>