<template lang="pug">
	section.section.reviews
		.container-admin.container-admin_column
			.section__title-wrap
				h2.section-title Блок «Отзывы»
			.reviews__content
				.reviews__title
					h3.section-title_middle Редактирование работы
				form(name="author-form").reviews__form
					.user-photo
						.user-photo__wrap
							.user-photo__photo
								img(src="../../../images/content/user.jpg").user-photo__img
						button(type='button').user-photo__btn-add Добавить фото
					.recall
						.recall__row
							label.recall__label
								.recall__title Имя автора
								input(type="text" name="author-name").recall__input
							label.recall__label
								.recall__title Титул автора
								input(type="text" name="author-rank").recall__input
						.recall__row
							label.recall__label
								.recall__title Отзыв
								textarea(name="author-desc").recall__input.recall__textarea
						.recall__row
							.recall__btn-container
								button(type="reset").btn-toggle-cancel Отмена
								button(type="button" name="author-add").load-form__btn.btn-toggle Сохранить
			.reviews__comments
				.reviews__comments-list
					button.create-btn(type="button" name="comment")
						.create-btn__circle
						.create-btn__text Добавить отзыв
					.comment(v-for="work in ['1', '2','3']")
						.comment__head
							.comment__avatar
								.avatar
									img(src="../../../images/content/user.jpg").avatar__img
							.comment__user-container 
								.comment__user User Name
								.comment__user-rank frontend
						.comment__content
							p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
						.comment__btn-wrap
								button(type="button").work__btn Править
									.edit-btn
								button(type="button").work__btn Удалить
									.btn-false
</template>

<script>
	
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

/* review */
	.reviews {
		&__content {
			display: flex;
			flex-direction: column;
			padding: 20Px;
			background-color: #fff;
			box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
			margin-bottom: 30px;
			@include phones {
				padding: 0;
			}
		}
		&__title {
			align-items: center;
			border-bottom: 1px solid rgba($text-color, .3);
			padding: 0 10Px 20Px;
			font-size: 16px;
		}
		&__form {
			width: 100%;
			display: flex;
			margin-top: 40px;
			padding: 10px;
			@include tablets {
				flex-direction: column;
				align-items: center;
			}
		}

		&__comments {
			width: 100%;
			&-list {
				margin-left: -30px;
				display: flex;
				flex-wrap: wrap;
			}
		}
	}
	.user-photo {
		margin-right: 30px;
		display: flex;
		flex-direction: column;
		&__wrap {
			width: 200px;
			margin: 0 auto;
		}
		&__photo {
			padding-bottom: 100%;
			border-radius: 50%;
			overflow: hidden;
			position: relative;
		}
	   &__img {
	      width: 100%;
	      height: 100%;
	      position: absolute;
	      top: 0;
	      left: 0;
	      object-fit: cover;
	   }
		&__btn-add {
			display: block;
			text-align: center;
			margin-top: 20px;
			font-size: 16px;
			font-weight: 600;
			color: #383bcf;
		}
	}
	.recall {
		width: 100%;
		&__row {
			display: flex;
			margin-bottom: 30px;
		}
		&__label {
			display: block;
			width: 100%;
		}
		&__input {
			display: block;
			border: none;
			outline: none;
			width: 100%;
			border-bottom: 1px solid $text-color;
			padding: 10px 0 15px;
			background: transparent;
			color: inherit;
			font-weight: 600;
			line-height: inherit;
			font-size: 16px;
	      &:focus {
	         border-bottom-color: $main;
	      }
		}
		&__title {
			/* line-height: 1; */
			font-weight: 700;
			color: rgba($text-color, .5);
			font-size: 16px;
		}
		&__textarea {
			min-width: 100%;
			min-height: 120px;
			padding: 10px;
			margin-top: 15px;
			border: 1px solid rgba($text-color,.3);
			resize: none;
			overflow: hidden;
			&:focus {
				border: 1px solid $main;
			}
		}

		&__btn-container {
			display: flex;
			width: 100%;
			justify-content: flex-end;
		}
	}

	.comment {
		width: calc(100% / 3 - 30px);
		min-height: 380Px;
		min-width: 280Px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-left: 30px;
		margin-bottom: 30px;
		padding: 20Px;
		@include tablets {
			width: calc(100% / 2 - 30px);
		}
		@include phones {
			width: 100%;
		}

		&__avatar {
			width: 50px;
			height: 50px;
		}

		&__head {
			display: flex;
			align-items: center;
			border-bottom: 1px solid rgba($text-color,.3);
			padding: 10Px 10Px 25Px;
		}

		&__user-container  {
			margin-left: 20px;
			.comment__user {
				font-size: 18px;
				font-weight: 700;
			}
			.comment__user-rank {
				color: rgba($text-color,.5);
			}
		}
		&__btn-wrap {
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
		}

		&__content {
			margin-top: 30px;
			flex: 1;
		}
	}

	.create-btn {
		width: calc(100% / 3 - 30px);
		min-height: 380Px;
		min-width: 280Px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		margin-left: 30px;
		margin-bottom: 30px;
		&:hover {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		@include tablets {
			width: calc(100% / 2 - 30px);
		}
		@include phones {
			width: 100%;
			min-height: 115px;
			flex-direction: row;
		}
		&__circle {
			position: relative;
			min-width: 125px;
			min-height: 125px;
			&:before,
			&:after {
				content: '';
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				width: 25%;
				height: 3px;
				background-color: #fff;
			}
			&::before {
				transform: translate(-50%, -50%);
			}
			&::after {
				transform: translate(-50%, -50%) rotate(90deg);
			}
			@include phones {
				min-width: 70px;
				min-height: 70px;
			}
			@include circle(auto,3px,white)
		}
		&__text {
			margin-top: 20px;
			font-size: 16px;
			font-weight: 700;
			color: white;
			@include phones {
				margin: 0 0 0 20px;
			}
		}
	}	
</style>