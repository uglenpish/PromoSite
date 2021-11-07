<template lang="pug">
section.login#section-login
		.login__container
			.login__content
				.login__title Авторизация
				form(
      		@submit.prevent="login"
    		).login__form
					label.login__label
						input(
							type="text" 
							name="login-login" 
							required=""
							v-model="user.name"
						).login__input
						.login__form-title Логин
						.login__icon-wrap
							.login__icon
					label.login__label
						input(
							type="password" 
							name="login-password" 
							required=""
							v-model="user.password"
							).login__input
						.login__form-title Пароль
						.login__icon-wrap
							.login__icon.login__icon-key
					.login__btn-wrap
						button(
							type="submit"
						).login__btn-login Отправить
</template>

<script>
	import axios from '../../loginSettings';
	import { mapMutations } from 'vuex';
	

	export default {
		data () {
			return{
				user: {
					name: "",
					password: "",
				}
			}
		},
		methods: {
			login(){
				axios.post("/login", this.user).then(response=>{
          this.$router.replace('/')
				})
			}
		}
	}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";

/* login */
.login{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
	/*overflow-y: hidden;*/
	/*position: relative;*/
	/*width: 100%;*/
	height: 100vh;
	background: url('../../../images/content/Mountain.jpg') center center / cover no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: rgba($text-color, .7)
	}

	&__container{
		width: 570px;
		height: 520px;
		background-color: #fff;
		z-index: 5;
		padding: 57px 73px;
		@include tablets {
			width: 528px;
			height: 528px;
		}
		@include phones {
			width: 100%;
			height: 100vh;
			padding: 30px;
		}

		.login__content{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	&__title {
		font-size: 36px;
		font-weight: 700;
		text-align: center;
		margin-bottom: 35px;
	}

	&__form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	&__label {
		margin-bottom: 30px;
		width: 100%;
  	position: relative;
	}

	&__form-title {
    position: absolute;
    top: 0;
    padding: 17px 0px 21px;
    font-weight: 600;
    color: rgba($text-color, .5);
    margin-left: 45px;
    font-size: 18px;
    transition: .3s;
  }

  &__input {
		position: relative;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    border-bottom: 2px solid rgba($text-color, .7);
    padding: 17px 45px 21px;
    background: transparent;
    color: inherit;
    font-weight: 700;
    line-height: inherit;
    font-size: 18px;

    &:focus>.login__form-title, 
    &:valid>.login__form-title {
     	top: -40px;
      font-size: 16px;
      color: $main;
    }

    &:focus:valid~.login__form-title {
      top: -40px;
      color: $text-color;
    }

    &:focus {
       border-bottom-color: $main;
    }

    &:focus~.login__icon-wrap .login__icon, 
    &:valid~.login__icon-wrap .login__icon {
 	   	background: svg-load('user.svg', fill=$main, width=100%, height=100%) center center no-repeat;
    }

    &:focus~.login__icon-wrap .login__icon_key, 
    &:valid~.login__icon-wrap .login__icon_key {
 	   	background: svg-load('key.svg', fill=$main, width=100%, height=100%) center center no-repeat;
    }

    &:focus:invalid~.login__icon-wrap .login__icon {
      background: svg-load('user.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
    }
    
    &:focus:invalid~.login__icon-wrap .login__icon_key {
      background: svg-load('key.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
    }
  }

  &__icon-wrap {
		position: absolute;
    bottom: 100%;
		
		.login__icon {
			background: svg-load('user.svg', fill=rgba($text-color, .5), width=100%, height=100%) center center no-repeat;
    	display: block;
    	position: absolute;
    	top: 50%;
    	transform: translateY(50%);
    	width: 30px;
    	height: 30px;
    	transition: .3s;
		}

		.login__icon-key {
			background: svg-load('key.svg', fill=rgba($text-color, .5), width=100%, height=100%) center center no-repeat !important;
		}
	}

	&__btn-wrap {
		text-align: center;
		margin-top: 50px;
	}

	&__btn-login {
		outline: none;
		color: #fff;
   	font-size: 18px;
   	font-weight: 600;
   	text-transform: uppercase;
   	padding: 30px 30px;
   	width: 350px;
   	border-bottom-right-radius: 40px;
   	border-bottom-left-radius: 5px;
   	border-top-left-radius: 40px;
   	border-top-right-radius: 5px;
   	background: linear-gradient( 50deg, rgb(173,0,237) 0%, rgb(129,0,240) 38%, rgb(85,0,242) 100%);
		@include phones {
			padding: 20px 20px;
			width: 250px;
		}
		&:focus {
			opacity: .8;
		}
		&:hover {
			background: linear-gradient( 70deg, rgb(187,0,255) 0%, rgb(138,0,255) 38%, rgb(89,0,255) 100%);      
		}
	}
}
</style>