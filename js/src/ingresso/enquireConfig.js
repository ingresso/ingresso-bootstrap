(function(){

	/* TODO - precisa refazer a estrutura desse codigo */


	var components = {

				// applied to bootstrap's collapse
				collapse:{
					'no-collapse':{
						_params:{
							medias:['small']
						},
						enquireConfig:{
							match:function(){
								//temp
								$('.js-md[data-toggle="collapse"]').each(function(){

									var $element = $(this),
									$content = $($element.attr('href')),
									unmatchClasses = ['model'];

									$content
									.removeClass('collapse')
									.removeAttr('style');

									$element.data('js-md-unmatch',{
										classes: null,
										attrs: null
									});

									if($element.hasClass('model1')){
										$element.data('js-md-unmatch',{
											classes: 'model1'
										})
										$element.removeClass('model1')
									}

									if($element.attr('role') == 'button'){
										$element.data
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


									$content
									.addClass('collapse');

									if($element.data('js-md-unmatch').classes == 'model1'){
										$element.addClass('model1')
									}

									$element.attr('href',$element.data('original-href'));


								});

								console.log('unmatch dropdown medium');
							},
							setup:function(){

								$('.js-md[data-toggle="collapse"]').each(function(){

									var $element = $(this),
									$content = $($element.attr('href')),
									unmatchClasses = ['model'];

								})

								$element.data('js-md-unmatch',{
									classes: null,
									attrs: null
								});
								$element.data('js-md-match',{
									classes: null,
									attrs: null
								});
								//console.log('iniciou dropdown medium');
							}
						}
					}
				},

			},
			medias = {
				small:'(min-width:568px)',
				medium:'(min-width:769px)'
			};

			function init(){

			}

			function organizeComponentsByMedia(media){
				var _components = {};

				for (var component in components){
					for(var componentVariation in components[component]){
							for(var a = 0; a < components[component][componentVariation]._params.medias.length; a++){
								if(components[component][componentVariation]._params.medias[a] == media){
									components[component] = components[component];
								}
							}
					}
				}
				return components;
			}

			init()
			for(var media in medias){

				console.log(getComponentsByMedia(media))

			};
})();
