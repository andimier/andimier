	
	
	function crearArticulo(titulo){

		for(a=0;a<articulos.length;a++){
	
			if(articulos[a]["enlace-"+idioma] == titulo){
				
				var tt = document.createElement("H1");
				var fe = document.createElement("H2");
				var p  = document.createElement("P");
				
				tt.innerHTML = articulos[a]["titulo-"+idioma];
				fe.innerHTML = articulos[a]["fecha-"+idioma];
				p.innerHTML  = articulos[a]["texto-"+idioma];
				
				cntarticulo.appendChild(tt);
				cntarticulo.appendChild(fe);
				cntarticulo.appendChild(p);
				
				var title = document.querySelector("title").innerHTML = articulos[a]["titulo-"+idioma] + ", BLOG, ANDIMIER";
				var keywords    = document.getElementsByName("keywords")[0].setAttribute("content", "");
				var description = document.getElementsByName("description")[0].setAttribute("content", articulos[a]["texto-"+idioma].substring(0, 150));
				
				
				// FACEBOOK TAGS
				var meta1 = document.createElement("META");
				meta1.setAttribute("property", "og:url");
				meta1.setAttribute("content", "http://www.andimier.com/"+idioma+"/blog/"+ articulos[a]["enlace-"+idioma]);
				document.head.appendChild(meta1);
				
				var meta2 = document.createElement("META");
				meta2.setAttribute("property", "og:type");
				meta2.setAttribute("content", "article");
				
				var meta3 = document.createElement("META");
				meta3.setAttribute("property", "og:title");
				meta3.setAttribute("content", articulos[a]["titulo-"+idioma]);
				
				var meta4 = document.createElement("META");
				meta4.setAttribute("property", "og:description");
				meta4.setAttribute("content", articulos[a]["texto-"+idioma].substring(0, 150));
				
				var meta5 = document.createElement("META");
				meta5.setAttribute("property", "og:image");
				meta5.setAttribute("content", articulos[a]["imagen"]);
				
				
				var punto = document.getElementsByTagName("LINK")[1];
				document.head.insertBefore(meta1, punto);
				document.head.insertBefore(meta2, punto);
				document.head.insertBefore(meta3, punto);
				document.head.insertBefore(meta4, punto);
				document.head.insertBefore(meta5, punto);
				
				break;
			}
			
		}
	}
	
	
	function ajustarVideo(){
		if(iframe){
			var ratio = 1280/720;
			iframe.style.width = cntarticulo.querySelector("P").offsetWidth + "px";
			iframe.style.height =  cntarticulo.querySelector("P").offsetWidth / ratio + "px";
		}
	}
	
	/*
		// FACEBOOK TAGS
		<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
		<meta property="og:type"               content="article" />
		<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
		<meta property="og:description"        content="How much does culture influence creative thinking?" />
		<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
	*/
	
	var cntarticulo = document.getElementById("cnt-articulo");
	crearArticulo(titulo);
	
	var iframe = document.querySelector("IFRAME");
	
	window.onload = function(){
		ajustarVideo();
	}
	
	window.onresize = function (){
		ajustarVideo();
	}
	