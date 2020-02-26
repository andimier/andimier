		function colorTitulo(color){
			//console.log(document.body.childNodes);
			console.log(document.body.childNodes.length);
			
			for(i=0; i<document.body.childNodes.length; i++){
				if(document.body.childNodes[i].nodeName == 'DIV' && document.body.childNodes[i].attributes.id.nodeValue == 'cnt-titulo'){
					//var id = document.body.childNodes[i].attributes.id.nodeValue;
					
					document.body.childNodes[i].lastElementChild.lastElementChild.style.color = color;
				}
				
			}
		}
        
        window.addEventListener('resize', function(){
            ilustracion.style.marginLeft = - (ilustracion.offsetWidth / 2) + 'px';
            fd_lineas.style.marginLeft = -(fd_lineas.offsetWidth/2) + 'px';
            banner.style.height = ilustracion.offsetHeight + 'px';
		});
        

		window.onload = function (){
			
			if(document.getElementById('computador').complete == true){

				ilustracion.style.marginLeft = - (ilustracion.offsetWidth / 2) + 'px';
				fd_lineas.style.marginLeft = -(fd_lineas.offsetWidth/2) + 'px';
				banner.style.height = ilustracion.offsetHeight + 'px';
				
				$('#ilustracion').animate({opacity:1}, 1000, function(){
					$('#fd-lineas').animate({opacity:1}, 1000);
				});
			}
		}
		
		var ilustracion = document.getElementById('ilustracion');
		var fd_lineas = document.getElementById('fd-lineas');
		var banner = document.getElementById('banner');
        
		//colorTitulo('#fff');