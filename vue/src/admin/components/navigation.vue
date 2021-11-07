<template lang="pug">
	nav.nav
		.container-admin
			ul.nav__list
				li.nav__item(v-for="(tab, ndx) in tabs")
					router-link(
					:to="tab.href"
					).nav__link {{tab.title}}
</template>

<script>
	export default {
	  data () {
	    return {
	      tabs: [
	        {
	          title: 'Обо мне',
	          href: '/'
	        },
	        {
	          title: 'Работы',
	          href: '/works'
	        },
	        {
	          title: 'Отзывы',
	          href: '/reviews'
	        }
	      ]
	    }
	  }
	}
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

/*  nav  */
	.nav {
		background-color: #fff;
		font-weight: 600;
		font-size: 16Px;
		height: auto;
		&__list {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: nowrap;
		}
		&__item {
			padding: 25Px 15Px;
			border-bottom: 3Px solid transparent;
			&:hover {
				color: $main;
				border-bottom: 3Px solid $main;
			}
		}
		&__link {
			white-space: nowrap;
		}
	}
</style>