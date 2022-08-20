$(document).ready(function() {

	showImages();

	function showImages() {
		let imagesBlock = $('.images');
		let items = '';

		$.get('https://boiling-refuge-66454.herokuapp.com/images', function(data){

			data.forEach(function(item) {
				items += `<div class="image-wrapper" data-id="${item.id}">
								<img class="image" src="${item.url}" alt="thumb">
							</div>`;
			});

			imagesBlock.html(items);
		});
	}

	$('.images').on('click', function(event) {
		if( $(event.target).hasClass('image-wrapper') || $(event.target).hasClass('image')) {
			let id = $(event.target).closest('.image-wrapper').data('id');
			let commentsOut = ``;

			$.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`, function(data){
				$('.modal__image img').attr('src', data.url);
				data.comments.forEach(function(item) {
					commentsOut += `<li class="modal__comment">
										${item.text}
									</li>`;
				});
				$('.modal__comments').html(commentsOut);
			});

			$('.modal').data('id', id);
			$('.modal').removeClass('display-none');
		}
	});

	$('.modal__close').on('click', function(event) {
		$('.modal').addClass('display-none');
		$('.modal__title').html('Большое изображение');
		$('.modal__image img').attr('src', '');
		$('.modal__input').val('');
		$('.modal__comments').empty();
		$('.modal').data('id', 0);
	});

	$('.modal__btn').on('click', function(event) {
		event.preventDefault();
		let id = $('.modal').data('id');
		let comment = $('.modal__input').val();

		// Так как ссылка не работает на Post запрос для добавленния комментария. Покажу ниже как бы я сделал
		// данный функционал. Просто й пост запрос с передачей коммента и id и после успешной отправки
		// просто вывожу +1 коммент к общему списку!

		// $.ajax({
		// 	url: 'https://boiling-refuge-66454.herokuapp.com/images/',
		// 	method: 'post',
		// 	dataType: 'json',
		// 	headers: {
				
		// 	},
		// 	data: {
		// 		imageId : id,
		// 		comments : comment
		// 	},
		// 	success: function(data){
		// 		alert('Комментарий успещно добавлен!');
		// 	}
		// });
		alert('Спасибо за оставленный комментарий!');
	});

});