<!DOCTYPE html>
<html>

	<head>
		<?php require_once('requeridos/tags.php'); ?>
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/formulario-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/idiomas-gr.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/idiomas-pq.css" />
	
	</head>
	
	<body>
	
		<?php include_once("analytics.php"); ?>
		
		
		<div id="cnt-titulo" class="fondo_gris">

			<div id="lg-andimier">
				<a href="./"><img alt="andimier diseño gráfico" src="imagenes/lg-andi-dibujo.png" /></a>
			</div>
		</div>
		
		<div id="franja-info">
			<div class="ttprincipal">
				<h1><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>
			</div>
			
			<div id="rayo-info"></div>
			<div class="circle-bottom bk-white"></div>
		</div>

		<div id="cnt_formulario">
			<form id="formulario" autocomplete="on" name="formulario" enctype="multipart/form-data" method="POST" onsubmit="return validateForm()">
			   
			   <input class="campo" type="text"  name="nombre" placeholder="<?php echo ($idioma=="es")?'tu nombre o empresa':'your name or company name';?>"><br>
			   <input class="campo" type="email" name="email"  placeholder="<?php echo ($idioma=='es')?'tu correo':'your e-mail';?>" autocomplete="off"><br>
			   
			   <textarea class="campo" name="mensaje" rows="4" cols="50" placeholder="<?php echo ($idioma == 'es') ? 'tu mensaje':'your message';?>"></textarea>
			   <input id="btn_enviar" type="submit" name="enviar" value="<?php echo ($idioma == 'es') ? 'enviar':'send';?>">
			
			</form>
		</div>

		<?php include_once("requeridos/elementos.php"); ?>
		
	</body>
	<?php include_once("requeridos/set-idioma.php"); ?>
	<script src="js/validar-formulario.js"></script>
	<script>
		
		var seccion = 'contacto';
		var colortitulo = '#eee';
		var imgLogo = 'url(imagenes/logosecciones1.png)';
		var tonodefondo = 'claro';
		
	</script>
	<script src="js/elementos1.js"></script>
	<script src="js/menusecciones.js"></script>
	
	
</html>