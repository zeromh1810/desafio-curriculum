$(function (){

	$('.navbar__icon').on('click', function(e) {
		event.preventDefault()
		$('.navbar__list').toggleClass('open')
	});

});

$(function(){

	$("a").click(function(event){
	  if (this.hash !== "") {
  
		// ESTO ES PARA EVITAR QUE EL SITIO CAMBIE DE PÁGINA, PARA QUE NO TENGA UN CAMBIO DE DIRECCIÓN DENTRO DEL MISMO LANDING 
		event.preventDefault();
  
		var navegation = this.hash;
  
		$("html, body").animate({
		  scrollTop: $(navegation).offset().top
		}, 800, function(){
		  window.location.hash = navegation;
		});
	  }
	});
  
  });
