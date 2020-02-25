<!DOCTYPE html>
<html>

	<head>

		<meta  http-equiv="Content-Type" content="text/html; charset=UTF-8" >
		<title>ROCA SOLIDA, ANDIMIER DISEÑO</title>

		<meta name="viewport" content="width=device-width , initial-scale=1 , user-scalable=no"/>
		
		<meta name="title" content="" />
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<?php require_once('requeridos/tags.php'); ?>
	
		<link rel="stylesheet" type="text/css"  media="screen" href="estilos/proyectos.css"  />
		<link rel="stylesheet" type="text/css"  media="only screen and (min-width:50px) and (max-width:500px)" href="estilos/proyectos-pq.css" />
	</head>
	
	<body>
	
		<?php include_once("analytics.php"); ?>
		
	<!--
		<div class="cnt_proyectos">
			<div class="img_proyectos"><img class="imagen" alt="logo roca solida bogotá" src="imagenes/proyectos-graficos/logo-roca-solida.jpg" /></div>
		</div>
		
		<div class="cnt_proyectos">
			<div class="img_proyectos"><img class="imagen" alt="afiche caseritos roca solida bogotá" src="imagenes/proyectos-graficos/afiche-caseritos.jpg" /></div>
		</div>
		
		<div class="cnt_proyectos">
			<div class="img_proyectos"><img class="imagen" alt="plegable servicios solida bogotá" src="imagenes/proyectos-graficos/roca-solida-plegable.jpg" /></div>
		</div>
		
		-->
	
		<div class="txt_proyectos">
			<h1 class="ltblanca"></h1>
			<h2 class="ltblanca"></h2>
			<p>
				
				
			</p>
		</div>
		
		
		
		<div id="logo_proyectos"></div>
		<?php require_once('requeridos/menusecciones.php'); ?>
		<?php require_once('requeridos/contacto.php'); ?>
		<?php include_once("requeridos/menu-mv.php"); ?>
		
	</body>
	
	
	<script src="js/listados/listado-diseno-grafico.js"></script>
	<script>
		var idioma  = '<?php echo $lgj; ?>';
		var cliente = '<?php echo $cliente; ?>';
		var seccion = '<?php echo $cliente; ?>';
		console.log(cliente)
	</script>
	
	<script>
	
		function crearParametros(){
			
			for(i=0;i<proyectos.length;i++){

				if(proyectos[i]['cliente'] == cliente){
					parametros = proyectos[i]['parametros']
					break;
				}
			}
			
			return parametros;
			
		}
	
		function crearImagenes(imagenes_arr){
			
			for(i=0;i<imagenes_arr.length;i++){
				
				var cnt_proyectos  = document.createElement("DIV");
				cnt_proyectos.className = "cnt_proyectos";
				var img_proyectos = document.createElement("DIV");
				img_proyectos. className = "img_proyectos"
				var img = document.createElement("IMG");
				img.className = "imagen";
				
				img.src = imagenes_arr[i];
				img_proyectos.appendChild(img);
				cnt_proyectos.appendChild(img_proyectos);
				
				document.body.appendChild(cnt_proyectos);
			}
		}
		
		function crearNodos(){
			
			var txtproyectos = document.getElementsByClassName("txt_proyectos");
			var parametros;
			
			for(i=0;i<proyectos.length;i++){

				if(proyectos[i]['cliente'] == cliente){
					
					document.querySelector('title').innerHTML = cliente + ', ANDIMIER';
					document.getElementsByName('keywords')[0].setAttribute("content", proyectos[i]['keywords-'+idioma]);
					document.getElementsByName('description')[0].setAttribute("content", proyectos[i]['description-'+idioma]);
					
					txtproyectos[0].querySelector("H1").innerHTML = proyectos[i]['h1-'+idioma];
					txtproyectos[0].querySelector("H2").innerHTML = proyectos[i]['ano'];
					txtproyectos[0].querySelector("P").innerHTML  = proyectos[i]['h2-'+idioma];
					crearImagenes(proyectos[i]['imagenes']);
					parametros = proyectos[i]['parametros']
					break;
					
				}
			}
		
		}
		
		crearNodos();
		
		var parametros  = crearParametros();
		var color_fondo = parametros[0];
		var color_h1    = parametros[1];
		var color_h2    = parametros[2];
		var color_p     = parametros[3];
		var tonodefondo = parametros[4];
	</script>
	
	<script src="js/proyectos.js"></script>
	<script src="js/menusecciones.js"></script>
	
	
</html>