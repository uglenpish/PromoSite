<template lang="pug">
	section.section.projects
		.container-admin.container-admin_column
			.section__title-wrap
				h2.section-title Блок «Работы»
			.projects__content
				.projects__title
					h3.section-title_middle Редактирование работы
				form(name="project-form").projects__form
					.load-window
						input(type="file" name="project-image" multiple).load-window__input
						label.load-window__label
						.load-window__content
							.load-window__text Перетащите или загрузите для загрузки изображения
							button(type="button" name="project-image-btn").load-window__btn.btn-toggle Загрузить
					.load-form
						label.load-form__label
							.load-form__title Название
							input(type="text" name="project-name").load-form__input
						label.load-form__label
							.load-form__title Ссылка
							input(type="text" name="project-link").load-form__input
						label.load-form__label
							.load-form__title Описание
							textarea(name="project-desc").load-form__input.load-form__textarea
						label.load-form__label
							.load-form__title Добавление тега
							input(type="text" name="project-tag").load-form__input
							ul.load-form__tags
								li.load-form__tag(v-for="tag in ['HTML', 'CSS', 'JavaScript']")
									p {{tag}}
									button.load-form__tag-btn.btn-false
						.load-form__btn-wrap
							button(type="reset").btn-toggle-cancel Отмена
							button(type="button" name="project-add").load-form__btn.btn-toggle Сохранить
			.projects__work
				button(type="button" name="project-add").work-btn
					.work-btn__circle
						.work-btn__text Добавить работу
				.work(v-for="work in ['1', '2']")
					.work__image
						img(src="../../../images/content/work/work1.jpg").work__pic
						ul.work__tags
							li.work__tag(v-for="tag in ['HTML', 'CSS', 'JavaScript']")
								p {{tag}}
					.work__container
						.work__content
							h4.work__title Сайт школы образования
							.work__text
								p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
							a.work__link http://loftschool.ru
						.work__btn-wrap
							button(type='button').work__btn Править
								.edit-btn
							button(type='button').work__btn Удалить
								.btn-false
</template>

<script>
	
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
/*  projects */
	.projects__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20Px;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-bottom: 30px;
		@include phones {
			/* padding: 0; */
		}
	}
	.projects__title {
		align-items: center;
		border-bottom: 1px solid rgba($text-color, .3);
		padding: 0 10Px 20Px;
		font-size: 16px;
	}
	.projects__form {
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		padding: 10px;
		@include tablets {
			flex-direction: column;
			align-items: center;
		}
	}
	.projects__work {
		display: flex;
		flex-wrap: wrap;
		margin-left: -30px;
	}
/* window work */
	.load-window {
		max-width: 490Px;
		width: 100%;
		height: 280px;
		background-color: #dee4ed;
		border: 1px dashed $text-color;
		position: relative;
		margin-right: 30px;
		@include tablets {
			margin: 0;
		}
		@include phones {
			margin: 0;
		}
		&__content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
		}
		&__btn {
			margin-top: 20px;
			padding: 15Px 40Px;
		}
		&__label {
			cursor: pointer;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
		&__text {
			color: rgba($text-color, .5);
			min-width: 200Px;
		}
		&__input {
			position: absolute;
			width: 0.1px;
			opacity: 0;
			z-index: -100;
			&:focus + .load-window__label {
			}
		}
	}
	.btn-toggle {
		background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		border-radius: 25px;
		color: #fff;
		font-weight: 700;
		border: 1px solid transparent;
		text-transform: uppercase;
		&:hover {
			background: linear-gradient( 180deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
	}
	.btn-toggle-cancel {
			background: #fff;
			font-size: 16px;
			font-weight: 600;
			color: $links-color;
			border: 1px solid transparent;
			padding: 7px;
			margin-right: 10%;
			&:hover {
				background: none;
			}
			@include phones {
				margin-right: 5%;
			}
		}
/* форма */
	.load-form {
		display: flex;
		flex-direction: column;
		max-width: 500Px;
		width: 100%;
		@include tablets {
			margin-top: 50px;
		}
		&__label {
			display: block;
			margin-bottom: 30px;
			&:last-of-type {
				margin-bottom: 0;
			}
		}
		&__title {
			line-height: 1;
			font-weight: 700;
			color: rgba($text-color, .5);
			font-size: 16px;
		} 
		&__input {
			position: relative;
			display: block;
			border: none;
			outline: none;
			width: 100%;
			border-bottom: 1px solid $text-color;
			padding: 15px 0 15px;
			background: transparent;
			color: inherit;
			font-weight: 600;
			line-height: inherit;
			font-size: 16px;
			/* margin-top: 30px; */
	      &:focus {
	         border-bottom-color: $main;
	      }
		} 
		&__textarea {
			max-width: 100%;
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
		&__tags {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 20px;
			margin-left: -20px;
		}
		&__tag {
			display: flex;
			align-items: center;
			margin-left: 20px;
			padding: 4Px 15Px;
			border-radius: 25Px;
			margin-bottom: 5px;
			background-color: #eee;
			p {
				font-size: 13px;
			}

			&-btn.btn-false::before {
				background-color: #777;
			}

			&-btn.btn-false::after{
				background-color: #777;
			}

			&-btn {
				margin-left: 10px;
			}
		}
		&__btn {
			padding: 15Px 36Px;
			text-transform: uppercase;
			&-wrap {
				margin-top: 20px;
				text-align: right;
			}
		} 
	}
/*  work content */
	.work {
		max-width: calc(100% / 3 - 30px);
		min-width: 280Px;
		min-height: 560Px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #fff;
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-left: 30px;
		margin-bottom: 30px;
		@include tablets {
			max-width: calc(100% / 2 - 30px);
		}
		@include phones {
			max-width: calc(100% - 30px);
		}
		&__container {
			height: 100%;
			padding: 30Px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			@include tablets {
				padding: 20Px;
			}
		}
		&__text {
			margin-top: 20px;
		}
		&__image {
			position: relative;
		}
		&__tags {
			position: absolute;
			bottom: 10px;
			right: 10px;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			margin-left: -20px;
		}
		&__tag {
			display: flex;
			align-items: center;
			margin-left: 10px;
			padding: 3Px 17Px;
			border-radius: 25Px;
			background-color: #eee;
			&:first-child {
				margin-left: 0;
			}
			p {
				font-size: 13px;
			}
		}
		&__title {
			font-size: 18px;
			font-weight: 700;
			line-height: 1;
		}
		&__link {
			color: $links-color;
			font-weight: 700;
			margin-top: 25px;
		}
		&__btn-wrap {
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
		}
		
		&__btn {
			display: flex;
			align-items: center;
			color: rgba($text-color,.7);
			.edit-btn,
			.btn-false {
				margin-left: 10px;
			}
			.edit-btn {
				background: svg-load('pencil.svg', fill=$links-color, width=100%, height=100%) center center no-repeat;
				opacity: 1;
			}
		}
	}
	.work-btn {
		width: calc(100% / 3 - 30px);
		min-width: 280Px;
		min-height: 560Px;
		display: block;
		background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);
		margin-left: 30px;
		margin-bottom: 30px;
		position: relative;
		&:hover {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		
		&__circle {
			max-width: 150px;
			max-height: 150px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.work-btn__text{
				position: absolute;
		    top: 100%;
		    margin-top: 10px;
		    text-align: center;
		    padding-left: 13px;
		    color: #fff;
		    font-size: 18px;
		    font-weight: 700;
		    line-height: 30px;
			}
			
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
				max-width: 70px;
				max-height: 70px;
			}
			@include circle(100%, 2px, #ffffff)
		}
		
		@include tablets {
			width: calc(100% / 2 - 30px);
			min-width: 280Px;
		}
		@include phones {
			min-width: 100%;
			min-height: 115Px;
		}
	}
</style>