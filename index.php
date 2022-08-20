<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/css/style.css">
	<script defer src="assets/js/jquery.min.js"></script>
	<script defer src="assets/js/script.js"></script>
	<title>Galary</title>
</head>
<body>
	<div class="page-wrapper">
		<div class="container">
			<div class="images">
				
			</div>
		</div>
		<div class="modal display-none" data-id="0">
			<div class="modal__inner">
				<div class="modal__close"></div>
				<div class="modal__title">
					Большое изображение
				</div>
				<div class="modal__image">
					<img src="" alt="big-img">
				</div>
				<form class="modal__form">
					<label for="comment" class="modal__label">Напишите комментарий</label>
					<textarea name="comment" id="comment" class="modal__input"></textarea>
					<button type="submit" class="modal__btn">Отправить</button>
				</form>
				<ul class="modal__comments">
					
				</ul>
			</div>
		</div>
	</div>
</body>
</html>