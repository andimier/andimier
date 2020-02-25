<!DOCTYPE html>
<html>

	<head>

		<?php require_once('requeridos/tags.php'); ?>
	
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/nosotros-gr.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:701px) and (max-width:800px)" href="estilos/nosotros-md.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:700px)" href="estilos/nosotros-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />

	</head>
	
	<body>
	
		<?php include_once("analytics.php"); ?>

		<div id="cnt-titulo" class="">
			
			<div id="lg-andimier">
				<a href="./"><img alt="andimier quienes somos" src="imagenes/lg-andi-grafico.png" /></a>
			</div>
	
		</div>
		
		
		<div id="franja-info">
			<div class="ttprincipal">
				<h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>
			</div>
			<p id="info"></p>
			<div id="rayo-info"></div>
			<div class="circle-bottom bk-white"></div>
		</div>

		<div id="banner">
            <div id="fd-lineas"><img id="lineas" src="imagenes/lo-que-hacemos-lineas.png" /></div>
            <div id="ilustracion"><img id="computador" src="imagenes/lo-que-hacemos.png" /></div>
        </div>
        
		
		<div class="ttprincipal">
			<h1><?php echo ($idioma=='es')?'[ servicios ]':'[ services ]'; ?></h1>
		</div>
        <div id="contenido">
			
            <div class="circle-top bk-white"></div>
			<div class="circle-bottom bk-white"></div>
			
            <div class="textos"></div>
            <div class="textos"></div>
			
			<div class="vacio"></div>
		</div>
		<?php require_once("requeridos/elementos.php"); ?>
		
	</body>
	<?php include_once("requeridos/set-idioma.php"); ?>
	<script src="js/listados/listado-quienes-somos.js"></script>
	<script src="js/quienes-somos-elementos.js"></script>
	<script src="js/quienes-somos-banner.js"></script>
	<script>
		
		var seccion = 'quienes somos';
		var colortitulo = '#eee';
		var imgLogo = 'url(imagenes/logosecciones1.png)';
		var tonodefondo = 'medio';

	</script>
	
	<script src="js/menusecciones.js"></script>
	
	
</html>