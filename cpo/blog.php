<!DOCTYPE html>
<html>

	<head>
		<?php require_once('requeridos/tags.php'); ?>
		<link href="estilos/blog-gr.css" rel="stylesheet" type="text/css"  media="screen"   />
		<link href="estilos/blog-md.css" rel="stylesheet" type="text/css" media="only screen and (min-width:501px) and (max-width:800px)"  />
		<link href="estilos/blog-pq.css" rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:500px)"  />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />

	</head>
	
	<body>
	
		<?php include_once("analytics.php"); ?>
		
		<div id="cnt-titulo" >
			
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

		<div id="cnt-articulos"></div>

		<?php require_once('requeridos/elementos.php'); ?>
		
	</body>
	<?php include_once("requeridos/set-idioma.php"); ?>
	<script src="js/listados/listado-blog.js"></script>
	<script src="js/blog-elementos.js"></script>
	<script src="js/blog.js"></script>
	
	<script>
		var seccion = 'blog';
		var imgLogo = 'url(imagenes/logoandimier4.png)';
		var colortitulo = '';
		var tonodefondo = 'oscuro';
	
	</script>
	<script src="js/elementos1.js"></script>
	<script src="js/menusecciones.js"></script>
	
	
</html>