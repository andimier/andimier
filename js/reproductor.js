

	window.onload = function(){
		
		//var cntvideo = document.getElementById('cnt_video');
		var losvideos = document.getElementsByClassName('video');
		var reproductor = document.getElementById('reproductor');
		
		var rep = document.getElementById('rep');
		var cadenarep = rep.src;
		
		var abierto = false;
		
		
		
		
		
		var ratio = 1.77;
		
		window.addEventListener('resize', function(){
			
			IniciarReproductor();
	
		})
		
		function IniciarReproductor(){
			
			if(window.innerWidth > 720){
				
				reproductor.style.width = '720px';
				reproductor.style.height = '407px';
				
				//cntvideo.style.width = '720px';
				//cntvideo.style.height = '407px';
				
				rep.style.width = 720 +'px';
				rep.style.height = 407 +'px';
				
			}else{
				
				reproductor.style.width = '85%';
				reproductor.style.height = reproductor.offsetWidth / ratio + 'px';
				
				//cntvideo.style.width = '85%';
				//cntvideo.style.height = reproductor.offsetWidth / ratio + 'px';
				
				// HAY QUE DARLE EL ANCHO AL VIDEO
				// PARA QUE OCUPE TODO EL CONTENDOR 
				rep.style.width = reproductor.offsetWidth - 30 +'px';
				rep.style.height = reproductor.offsetWidth / ratio +'px';
				
				
			}
			
			if(abierto == true){
				
			
				reproductor.style.marginRight = - (window.innerWidth /2 )-(reproductor.offsetWidth/2) + 'px'
				reproductor.style.marginTop = - (reproductor.offsetHeight/2) + 'px';
	
			}
			reproductor.style.marginTop = - (reproductor.offsetHeight/2) + 'px';
		}
		
		
		
		
		
	
		
		for(v=0; v<losvideos.length; v++){
		
			losvideos[v].addEventListener('click', function(){
			
				var enlace = this.id;

				if(abierto == false){
					
					$('.video').each(function(){
						$(this).animate({opacity:.7});
					})
					$('#reproductor').animate({marginRight: - (window.innerWidth /2 )-(reproductor.offsetWidth/2) + 'px'}, 1500, function(){
						rep.src = 'https://player.vimeo.com/video/'+ enlace;
					});

					abierto = true;
				}else{
					rep.src = '//player.vimeo.com/video/'+ enlace;
				}
				
				//console.log(enlace)
			});

		}
		
		$('#cerrar').click(function () {
			
			$('#reproductor').animate({marginRight: 800 + 'px'}, function(){
				$('.video').each(function(){
					$(this).animate({opacity:1});
					rep.src = '';
				})
			});
		
			abierto = false;
		});	
		
		
		IniciarReproductor();
		
	}