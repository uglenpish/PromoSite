<template lang="pug">
	header.header
		.container-admin
			.header__content
				.header__user
					.avatar
						img(src="../../images/content/user.jpg").avatar__img
					.user__name Стерлин Дмитрий
				.header__container 
					.header__title Панель администратора
					button(
						type='button'
						@click.prevent="logout"
						).header__btn Выйти
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
	  methods: {
	    ...mapActions('auth', ['logoutUser']),

	    async logout() {
	      await this.logoutUser()
	      await this.$router.replace('/login')
	    }
	  }
	}
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

/* header */
	.header {
		color: #fff;
		background: linear-gradient( 90deg, rgb(62,62,89) 0%, rgb(69,69,115) 100%);
		
		width: 100%;
		height: 80Px;
		&__content {
			width: 100%;
			display: flex;
			align-items: center;
		}
		&__user {
			display: flex;
			align-items: center;
			margin-right: 20px;
			@include phones {
				margin-left: 15px;
			}

			.user__name {
				color: #fff;
				line-height: 1.42;
				font-size: 18px;
				white-space: nowrap;
			}
		}
		&__container {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			@include phones {
				flex-direction: column;
				flex: 0;
				align-items: start;
			}
		}
		
		&__title {
			font-size: 14Px;
			color: rgba(255, 255, 255, 0.502);
			margin-right: 20px;
			text-align: left;
			flex: 1;
			@include phones {
				display: none;
			}
		}
		&__btn {
			font-size: 16Px;
			color: rgba(255, 255, 255, 0.702);
			text-decoration: underline;
			line-height: 1.5;
			&:hover {
				
			}
		}
	}
	.avatar {
		margin-right: 20px;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		width: 50px;
		height: 50px;

		&__img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
		}
	}
</style>