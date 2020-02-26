	
	
	
	
	function crearElementos(clase_linea, clase_circulo, clase_imagen, imagen_src, contenido){
	
		var linea = document.createElement('DIV');
		linea.className = clase_linea;
		
		var circulo = document.createElement('DIV');
		circulo.className = clase_circulo;
		
		var cnt_imagen = document.createElement('DIV');
		cnt_imagen.className = clase_imagen;
		
		var imagen = document.createElement("IMG");
		imagen.src = imagen_src;
		
		cnt_imagen.appendChild(imagen);
		
		contenido.appendChild(linea);
		contenido.appendChild(circulo);
		contenido.appendChild(cnt_imagen);
		
		
	}
	
	function crearDivTexto(clase,fecha,titulo,texto, span_arr, contenido){
		
		var cnt_texto = document.createElement('DIV');
		cnt_texto.className = clase;
		
		var h3 = document.createElement("H3");
		h3.innerHTML = fecha;
		
		var h1= document.createElement("H1");
		h1.innerHTML = titulo;
		
		var p= document.createElement("P");
		p.innerHTML = texto;

		cnt_texto.appendChild(h3);
		cnt_texto.appendChild(h1);
		//cnt_texto.appendChild(p);
		
		for(s=0;s<span_arr.length;s++){
			var span = document.createElement("SPAN");
			span.innerHTML = span_arr[s];
			cnt_texto.appendChild(span);
		}

		contenido.appendChild(cnt_texto);
		
		var vacio = document.createElement('DIV');
		vacio.className = 'vacio';
		contenido.appendChild(vacio);
		
	}
	
	function crearTags(tags){
		tags_arr = tags.split(',');
		return tags_arr;
	}
	
	function contenidosElementos(){
		
		fecha   = articulos[i]['fecha-'+idioma];
		titulo  = articulos[i]['titulo-'+idioma];
		texto   = articulos[i]['texto-'+idioma];
		span_arr = crearTags(articulos[i]['tags']);
		//span_arr = ["[ WEB ]"];
	}
	
	
	function crearContenido(salto){
		
		var contenido = document.createElement("DIV");
		contenido.className = 'contenido-cnt';
		(salto == 1 ) ? contenido.setAttribute("style", "text-align: right" ) : '';
		contenido.setAttribute("enlace",articulos[i]['enlace-'+idioma]);
		
		if(salto==1){
			crearElementos("contenido-linea c-linea1", "circle circle-bottom-r bk-ccc", "contenido-img c-linea2", articulos[i]['imagen'], contenido);
			clase = "contenido-txt float-l";
		}else{
			crearElementos("contenido-linea c-linea2", "circle circle-bottom-l bk-ccc", "contenido-img c-linea1", articulos[i]['imagen'], contenido);
			clase = "contenido-txt float-r";
		}
		
		contenidosElementos();
		
		crearDivTexto(clase,fecha,titulo,texto,span_arr,contenido);
		
		return contenido;
	}
	
	
	function crearNodos(){
		

		for(i=0;i<articulos.length;i++){
			
			// SALTO PARA PONER LOS ARTICULOS ALTERNADOS EN CADA COLUMNA
			if(salto==3){
				salto = 1;
			}
			
			console.log("salto = " + salto);
			
			if(salto == 1){
				
				var contenido = crearContenido(salto);

				col1.appendChild(contenido);
				
			}else if(salto == 2){
	
				var contenido = crearContenido(salto);

				col2.appendChild(contenido);
				
			}
			
			
			contenido.addEventListener("mouseover", function(){
				$(this).stop().animate({opacity: .5});
			});
			
			contenido.addEventListener("mouseover", function(){
				$(this).stop().animate({opacity: 1});
			});
			
			contenido.addEventListener("click", function(){
				window.location.href = articulos[i]['enlace-'+idioma];
			});
			
			salto++;
			
		}
		
		
	}
	
	
	
	// CREAR ELEMENTOS PARA MOVILES
	function crearNodosMv(){
		
		for(i=0;i<articulos.length;i++){
			
			var nmv_articulo = document.createElement('DIV');
			nmv_articulo.className = "nuevos-mv-articulo";
			
			//
			var nmv_cntimg = document.createElement('DIV');
			nmv_cntimg.className = "nuevos-mv-img";
			
			var nmv_img = document.createElement("IMG");
			nmv_img.src = articulos[i]['imagen'];
			nmv_cntimg.appendChild(nmv_img);
			
			
			
			//
			
			var nmv_txt = document.createElement('DIV');
			nmv_txt.className = "nuevos-mv-txt";
			
			var h3 = document.createElement("H3");
			h3.innerHTML = articulos[i]['fecha-'+idioma];
			
			var h1= document.createElement("H1");
			h1.innerHTML = articulos[i]['titulo-'+idioma];
			
			nmv_txt.appendChild(h3);
			nmv_txt.appendChild(h1);
			
			crearTags(articulos[i]['tags']);
			
			for(s=0;s<span_arr.length;s++){
				var span = document.createElement("SPAN");
				span.innerHTML = span_arr[s];
				nmv_txt.appendChild(span);
			}
			

			nmv_articulo.appendChild(nmv_cntimg);
			nmv_articulo.appendChild(nmv_txt);
			
			var vacio = document.createElement('DIV');
			vacio.className = 'vacio';
			nmv_articulo.appendChild(vacio);
			
			
			ncntmv.appendChild(nmv_articulo);
			
		}
	}
	
	
	
	function verDivs(){
		
		if(window.innerWidth>749){
			nuevoscnt.style.display = "block";
			ncntmv.style.display = "none";
		}else{
			nuevoscnt.style.display = "none";
			ncntmv.style.display = "block";
		}
	}
	
	
	var salto = 1;
	var clase;
	var fecha;
	var titulo;
	var texto;
	var span_arr;
	
	var nuevoscnt = document.getElementById("nuevos-cnt");
	var col1 = document.getElementById("nuevos-col1");
	var col2 = document.getElementById("nuevos-col2");
	crearNodos();
	
	var ncntmv = document.getElementById("nuevos-cnt-mv");
	crearNodosMv();
	
	verDivs();
	window.onresize = function(){
		verDivs();
	}
	
	
	
	/*
	
	
	// MV
	<div class="nuevos-mv-articulo">
		<div class="nuevos-mv-img"><img src="imagenes/blog/prueba-portada.jpg"/></div>
		<div class="nuevos-mv-txt">
			<h3>fecha</h3>
			<h1>natalia behaine en la clese de arte maguistral de la universisdad de ala alskldn amsdoantaña</h1>
			<span>[ WEB ]</span><span>[ BLOG ]</span>
		</div>
		<div class="vacio"></div>
	</div>
	

	// GRANDE
	<div id="nuevos-cnt">
	
		<div id="nuevos-col1">
			
			<div class="contenido-cnt" style="text-align: right">
				
				<div class="contenido-linea c-linea1"></div>
				<div class="circle circle-bottom-r bk-cian"></div>
				<div class="contenido-img c-linea2"><img src="imagenes/inicio-blog/natalia-behaine.png" /></div>
				
				<div class="contenido-txt float-l">
					<h3>fecha</h3>
					<h1>NATALIA BEHAINE</h1>
					
					<p>eL TEXTO DEL ARTÍCULO</p>
					<span>[ WEB ]</span><span>[ BLOG ]</span>
				</div>
			</div>
		
		</div>
		
		<div id="nuevos-separador"></div>
		
		<div id="nuevos-col2">
			
			<div class="contenido-cnt">
				<div class="contenido-linea c-linea2"></div>
				<div class="circle circle-bottom-l bk-cian"></div>
				<div class="contenido-img c-linea1"></div>
				
				<div class="contenido-txt float-r">
					<h3>fecha</h3>
					<h1>NATALIA BEHAINE</h1>
					<p>eL TEXTO DEL ARTÍCULO</p>
					<span>[ WEB ]</span><span>[ BLOG ]</span>
				</div>
			</div>
		
		</div>
		
	</div>
	
	*/