
	
	
	function crearArticulos(idioma){
		
		for(i=0;i<articulos.length;i++){
			
			
			var cntarticulo = document.createElement('DIV');
			cntarticulo.className = "articulo-cnt";
			cntarticulo.setAttribute('href', articulos[i]['enlace-'+idioma]);
			
			//
			var imagen = document.createElement('DIV');
			imagen.className = "articulo-img";
			
			var img = document.createElement('IMG');
			img.src = articulos[i]['imagen'];
			img.setAttribute('alt', articulos[i]['alt-'+idioma]);

			imagen.appendChild(img);
			
			
			// FECHA
			
			var fecha = document.createElement('DIV');
			fecha.className = "articulo-fecha";
			var h2 = document.createElement('H2');
			h2.innerHTML = articulos[i]['fecha-'+idioma];
			fecha.appendChild(h2);
			
			// TITULO
			
			var tt = document.createElement('DIV');
			tt.className = "articulo-tt";
			var h1 = document.createElement('H1');
			h1.innerHTML = articulos[i]['titulo-'+idioma];
			tt.appendChild(h1);
			
			
			// APPEND A CADA ARTICULO
			cntarticulo.appendChild(imagen);
			cntarticulo.appendChild(fecha);
			cntarticulo.appendChild(tt);
			
			cntarticulos.appendChild(cntarticulo)
			
		}
	}
	
	var cntarticulos = document.getElementById("cnt-articulos");
	crearArticulos(idioma);
	
	
	/*	
	<div class="articulo-cnt">
		<div class="articulo-img"><a href=""><img src="imagenes/blog/prueba-portada.jpg" /></a></div>
		<div class="articulo-fecha"><h2><a href="">JUNIO 22 DE 2016</a></h2></div>
		<div class="articulo-tt"><h1><a href="">Artista visual Natalia Behaine y su obra "José".</a></h1></div>
	</div>
	*/