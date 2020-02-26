	
	
	
	function ponerAlturas(altura){
		
		margenabajo = 40;
		console.log('aqi')
	
		for(i=0;i<cnt_articulo.length;i++){
			
			if(window.innerWidth>500){
				cnt_articulo[i].style.height = (img_articulo[0].offsetHeight + fecha_articulo[0].offsetHeight + altura + margenabajo) + 'px';
			}else{
				cnt_articulo[i].style.height = "auto";
			}
		}
		
		
	}
	
	
	
	function alturaArticulos(){
		
		alturas_arr = [];
		
		for(i=0;i<tt_articulo.length;i++){
			alturas_arr.push(tt_articulo[i].offsetHeight);
		}
		
		altura = Math.max.apply(Math, alturas_arr);
		ponerAlturas(altura);
	
	}
	
	
	function rollOverClick(){
		
		color_in = 'red';
		color_out = '#689b9b';
		
		for(i=0;i<cnt_articulo.length;i++){
			
			cnt_articulo[i].addEventListener("mouseover", function(){
				console.dir(this.childNodes)
				$(this.childNodes[0]).stop().animate({opacity:.5});
				this.childNodes[1].childNodes[0].style.color = color_in;
				this.childNodes[2].childNodes[0].style.color = color_in;
				this.childNodes[2].style.borderTop = "1px solid "+color_in;
			});
			
			cnt_articulo[i].addEventListener("mouseout", function(){
				$(this.childNodes[0]).stop().animate({opacity:1});
				this.childNodes[1].childNodes[0].style.color = color_out;
				this.childNodes[2].childNodes[0].style.color = color_out;
				this.childNodes[2].style.borderTop = "1px solid "+color_out;

			});
			
			cnt_articulo[i].addEventListener("click", function(){
				window.location.href = this.getAttribute('href');
			});
		}
	}
		
		
	//var cnt_articulos = document.getElementById("cnt-articulos");
	var cnt_articulo = document.getElementsByClassName('articulo-cnt');
	var img_articulo = document.getElementsByClassName('articulo-img');
	var tt_articulo = document.getElementsByClassName('articulo-tt');
	var fecha_articulo = document.getElementsByClassName('articulo-fecha');
	var alturas_arr = [];
	
	
	window.onload = function(){
		alturaArticulos();
	}
	
	window.addEventListener("resize", function(){
		alturaArticulos();
	});
	
	rollOverClick();
	
	
