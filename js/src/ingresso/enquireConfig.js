(function(){

	/* TODO - precisa refazer a estrutura desse codigo */
	var components = {


				collapse:{
					'js-md':{
						match:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.attr('href')),
								unmatchClasses = ['model']

								$element.removeClass('collapsed');
								$content
								.removeClass('collapse')
								.removeAttr('style');

								if($element.hasClass('model1')){
									$element.data('js-md-unmatch-classes','model1')
									$element.removeClass('model1')
								}

								$element.data('original-href',$element.attr('href'));
								$element.removeAttr('href');


							});

							console.log('match dropdown medium');
						},
						unmatch:function(){

							//temp
							$('.js-md[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.data('original-href'));

								$element.addClass('collapsed');
								$content
								.addClass('collapse');

								if($element.data('js-md-unmatch-classes') == 'model1'){
									$element.addClass('model1')
								}

								$element.attr('href',$element.data('original-href'));


							});

							console.log('unmatch dropdown medium');
						},
						setup:function(){
							//console.log('iniciou dropdown medium');
						}
					},
					'js-lg':{
						match:function(){

							//temp
							$('.js-lg[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.attr('href')),
								unmatchClasses = ['model']

								$element.removeClass('collapsed');
								$content
								.removeClass('collapse')
								.removeAttr('style');

								if($element.hasClass('model1')){
									$element.data('js-lg-unmatch-classes','model1')
									$element.removeClass('model1')
								}

								$element.data('original-href',$element.attr('href'));
								$element.removeAttr('href');


							});

							console.log('match dropdown large');
						},
						unmatch:function(){

							//temp
							$('.js-lg[data-toggle="collapse"]').each(function(){

								var $element = $(this),
								$content = $($element.data('original-href'));

								$element.addClass('collapsed');
								$content
								.addClass('collapse');

								if($element.data('js-lg-unmatch-classes') == 'model1'){
									$element.addClass('model1')

								}
								$element.attr('href',$element.data('original-href'));


							});

							console.log('unmatch dropdown large');
						},
						setup:function(){
							//console.log('iniciou dropdown medium');
						}
					},
					'js-sm':{
						match:function(){

							console.log('match dropdown small')
						},
						unmatch:function(){
							console.log('unmatch dropdown small');
						},
						setup:function(){
							//console.log('iniciou dropdown small');
						}
					}
				},
				/*carousel:{
					'js-md':{
						match:function(){
							console.log('match carousel medium');
						},
						unmatch:function(){
							console.log('unmatch carousel medium');
						},
						setup:function(){
							console.log('iniciou carousel medium');
						}
					},
					'js-sm':{
						match:function(){
							console.log('match carousel small');
						},
						unmatch:function(){
							console.log('unmatch carousel small');
						},
						setup:function(){
							console.log('iniciou carousel small');
						}
					}
				}*/
			}
			var medias = {
				small:'(min-width:568px)',
				medium:'(min-width:769px)',
				large:'(min-width:992px)'
			};

			for(var media in medias){

				var this_media_components = [];

				/*
					para cada componente, verifica-se quais batem com a midia atual
					reune-se todos os componentes dessa media para ser executado posteriormente
					no local adequado
				*/
				for (var component in components){

					if(media == 'small'){

						this_media_components.push(components[component]['js-sm']);
					}
					else if(media == 'medium'){

						this_media_components.push(components[component]['js-md']);
					}
					else if(media == 'large'){

						this_media_components.push(components[component]['js-lg']);
					}
				}
				console.log('executando media '+media);
				//para cada media, executa-se equire.register()
				enquire.register(medias[media],this_media_components);

				// reseting
				this_media_components = [];
			};
})();
