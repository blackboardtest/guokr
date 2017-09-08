{ image: '',
	is_replyable: true,
	channels: [ [Object] ],
	channel_keys: [ 'interview' ],
	preface: '',
	id: 442373,
	subject:
	{ url: 'http://www.guokr.com/scientific/subject/others/',
		date_created: '2014-05-23T16:22:09.282129+08:00',
		name: '其他',
		key: 'others',
		articles_count: 260 },
		copyright: 'owned_by_guokr',
		author:
		{ ukey: '9ejump',
			is_title_authorized: false,
			nickname: 'S.Mars',
			master_category: 'normal',
			amended_reliability: '0',
			is_exists: true,
			title: '',
			url: 'http://www.guokr.com/i/0568636369/',
			gender: null,
			followers_count: 30,
			avatar: [Object],
			resource_url: 'http://apis.guokr.com/community/user/9ejump.json' 
		},
		image_description: '',
		is_show_summary: false,
		minisite_key: null,
		image_info:
		{ url: 'https://3-im.guokr.com/TMfL9TyJiqD-McEa0wS5ogFQF8oVBLWkEXHbCrj817L0AQAATQEAAEpQ.jpg',
			width: 500,
			height: 333 },
			subject_key: 'others',
			minisite: null,
			tags: [],
			date_published: '2017-08-25T18:15:33+08:00',
			authors: [ [Object] ],
			replies_count: 10,
			is_author_external: false,
			recommends_count: 1,
			title_hide: '对谈《极盗车神》主创：在我的BGM里，没人能打败我',
			date_modified: '2017-08-30T22:55:43.174069+08:00',
			url: 'http://www.guokr.com/article/442373/',
			title: '对谈《极盗车神》主创：在我的BGM里，没人能打败我',
			small_image: 'https://3-im.guokr.com/TMfL9TyJiqD-McEa0wS5ogFQF8oVBLWkEXHbCrj817L0AQAATQEAAEpQ.jpg',
			summary: '本体应该叫“极盗车神的歌单”吧……',
			ukey_author: '9ejump',
			date_created: '2017-08-25T18:15:33+08:00',
			resource_url: 'http://apis.guokr.com/minisite/article/442373.json' }



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
