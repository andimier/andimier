	<script>
		
		var idioma = '<?php echo $lgj; ?>';
		var lkidiomas = [];
		
		<?php foreach($lkidiomas as $val){ ?>
		lkidiomas.push('<?php echo str_replace("/","",$val); ?>');
		<?php } ?>
		
		var idiomas_cnt = document.getElementById("idiomas-cnt");
		var idiomas = document.getElementsByName("idioma");
		
		idiomas[0].setAttribute("href", lkidiomas[1]);
		idiomas[1].setAttribute("href", lkidiomas[0]);
		
	</script>