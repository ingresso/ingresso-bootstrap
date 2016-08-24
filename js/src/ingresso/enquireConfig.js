(function(){

	/* TODO - precisa refazer a estrutura desse codigo */


	// methods
	function createMediaComponent(prefix,selector){
		//js-md- + no-collapse
		//$(prefix+selector)
	}

	function getComponentsByMedia(media){
		var _components = [];
		var _counter = 0;
		for(var component in components[media]){
			for(var componentVariant in components[media][component]){
				if(typeof componentVariant.match == 'function' || typeof componentVariant.unmatch == 'function'){
					_components[_counter] = components[media][component][componentVariant];
					_counter++
				}
			}
		}
		return _components;
	}

	// attributes
	var components = {

				// applied to bootstrap's collapse
				medium:{
					collapse:{
						'no-collapse':{
							match:function(){
								//temp
								$('.js-md-no-collapse').each(function(){

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
										$element.data()
									}

									$element.data('original-href',$element.attr('href'));
									$element.removeAttr('href');


								});

								console.log('enquire - match');
							},
							unmatch:function(){

								//temp
								$('.js-md-no-collapse').each(function(){

									var $element = $(this),
									$content = $($element.data('original-href'));


									$content
									.addClass('collapse');

									if($element.data('js-md-unmatch').classes == 'model1'){
										$element.addClass('model1')
									}

									$element.attr('href',$element.data('original-href'));


								});

								console.log('enquire - unmatch');
							},
							setup:function(){

								$('.js-md-no-collapse').each(function(){

									var $element = $(this),
									$content = $($element.attr('href')),
									unmatchClasses = ['model','model1'];


									$element.data('js-md-no-collapse-unmatch',{
										classes: null,
										attrs: null
									});
									$element.data('js-md-no-collapse-match',{
										classes: ['!model','!model1'],
										attrs: {
											role:'button'
										}
									});

								})

								console.log('enquire - setup');
							}
						}
					}
				}

	},
	medias = {
		small:'(min-width:568px)',
		medium:'(min-width:769px)'
	};

	for(var media in medias){
		var _comps = getComponentsByMedia(media);
		if(_comps.length){
			enquire.register(medias[media],_comps);
		}
	};
})();
