hubble.getJSON('http://www.guokr.com/apis/minisite/article.json?retrieve_type=by_subject&limit=20', function (error, response, data) {
	data.result.forEach(function(item) {
		var key = item.id;

		articles.get('key', key, function (article) {
			if (article) return;

			var image   = item.image_info.url;
			var url     = item.url;
			var title   = item.title;
			var summary = item.summary;

			hubble.getHtml(url, function (error, response, $) {
				var content = $('.document').html();
				var image   = $('.document img').eq(0).attr('src');

				var article = {
					title: title,
					content: content,
					summary: summary,
					url: url,
					image: image 
				};
				articles.append(article);
			});
		})
	})
});
