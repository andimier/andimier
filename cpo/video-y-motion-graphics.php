<!DOCTYPE html>
<html>

	<head>
		<?php require_once('requeridos/tags.php'); ?>

		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/video-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:500px) and (max-width:700px)" href="estilos/video-md.css" />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:480px)" href="estilos/video-pq.css" />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />
		

	</head>

	<body>
		<?php include_once("analytics.php"); ?>
		

		<div id="cnt-titulo" >

			<div id="lg-andimier">
				<a href="./"><img alt="andimier diseño gráfico" src="imagenes/lg-andi-video.png" /></a>
			</div>
		</div>
		
		<div id="franja-info">
			<div class="ttprincipal">
				<h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>
			</div>
			
			<div id="rayo-info"></div>
			<div class="circle-bottom bk-white"></div>
		</div>

		<div class="cnt-videos">

			<div id="thumbs">
				<div class="cnt_carga">
					<div class="carga"><img src="imagenes/carga.gif" /></div>
				</div>
				<div class="vacio"></div>
			</div>

		</div>
		
		<div id="reproductor">
			<div id="cnt_video">
				<iframe id="rep" src="" width="100%" height="100%" frameborder="0" title="" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				<div id="cerrar"></div>
			</div>
	
		</div>

		<?php require_once("requeridos/elementos.php"); ?>
	</body>

	<?php include_once("requeridos/set-idioma.php"); ?>
	<script>
		var seccion = 'video & motion graphics';
		var colortitulo = '#d24750';
		var imgLogo = 'url(imagenes/logoandimier3.png)';
		var tonodefondo = 'claro';
	</script>
	<script src="js/elementos1.js"></script>
	<script src="js/menusecciones.js"></script>
	<script src="js/videos.js"></script>
	<script src="js/reproductor.js"></script>
	
	

</html>