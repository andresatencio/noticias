$(function() {
	FastClick.attach(document.body);
	//alert('Hola mundo')
	$.getJSON("http://snapi.aws.af.cm/informante", function (data) {
		var template = $('#tplNoticiaInformante').html();
		var html = Mustache.to_html(template, data);
		$('#informante').html(html);
		// $('#informante').listview('refresh');  
		console.log(data)
	})

	$.getJSON("http://snapi.aws.af.cm/norte", function (data) {
		var template = $('#tplNoticiaElNorte').html();
		var html = Mustache.to_html(template, data);
		$('#norte').html(html);
		// $('#norte').listview('refresh');  
		console.log(data)

		$('div[data-idNoticia]').on("click", function (e) {
			var id = $(this).attr("data-idNoticia");
			$.getJSON("http://snapi.aws.af.cm//informante/nota/" + id, function (data) {
				console.log(data)
			})
		})
		
	})
	
})
