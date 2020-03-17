<!DOCTYPE html>
<html>
	<head>
		<meta  http-equiv="Content-Type" content="text/html; charset=UTF-8" >
		<meta name="viewport" content="width=device-width , initial-scale=1 , user-scalable=no"/>
		<?php require_once('requeridos/tags.php'); ?>
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/inicio-gr.css"  />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:500px) and (max-width:800px)" href="estilos/inicio-md.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/inicio-pq.css" />
	</head>
	
	<body>
		<?php include_once("analytics.php"); ?>
		<!--<div id="inicio">-->
			<div id="banner">
				<div id="img-banner"><img id="img-ilust" src="imagenes/banner-andimier-01.png" /></div>
			</div>
			
			<div id="andi">
				<div id="idiomas-cnt">
					<div id="idiomas-linea"></div>
					<div class="idiomas-idioma idiomas-margen-mundo"><img src="imagenes/mundo-idiomas.png" alt="andimier, estudio de diseño - español, design studio - english" /></div>
					<a href="en"><div class="idiomas-idioma idiomas-hover">en</div></a>
					<a href="./"><div class="idiomas-idioma idiomas-margen1 idiomas-hover">es</div></a>
				</div>
				<img alt="andimier estudio de diseño, gráfico, web, arquitectura, bogotá, colombia" src="imagenes/logo-andimier.png" />
				<div id="btn-blog"></div>
			</div>
			
			<h1 id="estudio"><?php echo $elm_arr[$seccion][$idioma]['tt-seccion']; ?></h1>

			<div id="menu-inicio"></div>
		<!--</div>-->
		<div id="nuevos">
			<div id="nuevos-tt">
				<h1><a href="blog">Blog</a></h1>
				<h2><?php echo date("Y-m-j g:i a"); ?></h2>
				<div class="circle circle-bottom bk-ccc"></div>
			</div>
		
			<div id="nuevos-cnt" style="display:none">
				<div id="nuevos-col1"></div>
				<div id="nuevos-separador"></div>
				<div id="nuevos-col2"></div>
			</div>
			
			<div id="nuevos-cnt-mv"></div>
		</div>

		<div id="react-test"></div>

		
		<?php require_once('requeridos/footer.php'); ?>
		<?php require_once('requeridos/contacto.php'); ?>
	</body>

	<script src="js/lib/react.min.js"></script>
	<script src="js/lib/react-dom.min.js"></script>
	<script type="module" src="dist/js/bundle.js"></script>
	<script>
		var idioma = '<?php echo $lgj; ?>';
	</script>
	<script src="js/listados/listado-blog.js"></script>
	<script src="js/inicio-blog.js"></script>
	<script src="js/inicio-blog-columnas.js"></script>
	<script src="js/inicio-banner.js"></script>
	<script src="js/andi-inicio.js"></script>
	
	<script>
		var menu_inicio = document.getElementById("menu-inicio");
		var btn_blog = document.getElementById("btn-blog");
		nuevos.style.display = 'none';
		
		var activo = false;

		btn_blog.onclick = function(){
			
			//nuevos.style.display = 'block';
			//menu_inicio.style.display = 'none';
			if(activo ==  false){
				
				$(nuevos).stop().slideDown(function(){
					activo = true;
				});
				
				$(menu_inicio).stop().slideUp();
				dimensionesColumnas();
			}else{
				$(nuevos).stop().slideUp(function(){
					activo = false;
				});
				$(menu_inicio).stop().slideDown();
			}
		
		}
		
	
	</script>
	
</html>