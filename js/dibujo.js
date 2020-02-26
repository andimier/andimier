	
	
	function crearNodosDibijos(){
		
		for(i=0;i<list_dibujos.length;i++){
			
			var dibujo = document.createElement('DIV');
			dibujo.className = 'dibujo';
			
			//
			var cntimagen = document.createElement('DIV');
			cntimagen.className = 'imagen';
			
			var imagen = document.createElement("IMG");
			imagen.src = list_dibujos[i]["imagen"];
			imagen.setAttribute("alt", list_dibujos[i]["alt-"+idioma])
			
			cntimagen.appendChild(imagen);
			
			//
			var texto = document.createElement('DIV');
			texto.className = 'texto';
			
			var h2 = document.createElement('H2');
			var p = document.createElement('P');
			
			h2.innerHTML = list_dibujos[i]["ano"];
			p.innerHTML  = list_dibujos[i]["tecnica-"+idioma];
			
			texto.appendChild(h2);
			texto.appendChild(p);
			
			dibujo.appendChild(cntimagen);
			dibujo.appendChild(texto);
			
			cnt_dibujos.appendChild(dibujo);

		}
		
	}
	
	var cnt_dibujos = document.getElementById("cnt-dibujos");
	crearNodosDibijos();
/*
<div class="dibujo">

	<div class="imagen">
		<img class="imagen" src="imagenes/dibujo/paola-garzon1.jpg" />
	</div>
	
	<div class="texto">
		<h2>2014</h2>
		<p>Técnica mixta sobre papel.</p>
		<p>Prismacolor, lápiz, tinta</p>
	</div>
</div>
*/