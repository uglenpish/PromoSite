<template lang="pug">
	.wrapper
		Header
		Navigator
		main.content-container
			router-view
		//- About
		//- Works
		//- Reviews

</template>

<script>
	import Login from "./components/pages/login"
	import About from "./components/pages/about"
	import Works from "./components/pages/works"
	import Reviews from "./components/pages/reviews"
	import Header from "./components/heder"
	import Navigator from "./components/navigation"

	export default {
  	components: {
	  	Login,
	  	About,
	  	Works,
	  	Reviews,
	  	Header,
	  	Navigator,
	  }
	}
</script>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
	@import "normalize.css";
	@import "../styles/mixins.pcss";
	@import "../styles/layout/base.pcss";
	
/* body and section */
	body {
		background-color: #f8f9fe;
	}

	button[type="button"] {
	  background-color: inherit;
	}
	.container-admin {
		width: 100%;
		max-width: 1140Px;
		height: 100%;
		margin: 0 auto;
		padding: 0 20px;
		position: relative;
		display: flex;
		&_column {
			flex-direction: column;
		}
		@include phones {
			padding: 0;
		}
	}
	.section-title {
		font-size: 21px;
		font-weight: 700;
		&_middle{
			font-size: 18px;
			font-weight: 600;
		}
	}
	.section__title-wrap {
		display: flex;
		padding: 30Px 0;
		@include phones {
			flex-direction: column;
			align-items: start;
			margin-left: 20px;
		} 
	}
/* кнопки */
	.edit-btn {
		background: svg-load('pencil.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
		width: 15px;
		height: 15px;
		opacity: .5;
		&:hover {
			opacity: 1;
		}
	}
	.delete-btn {
		background: svg-load('trash.svg', fill=$text-color, width=100%, height=100%) center center no-repeat;
		width: 15px;
		height: 15px;
		opacity: .5;
		&:hover {
			opacity: 1;
		}
	}
	.btn-true {
		background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%) center center no-repeat;
		display: block;
		width: 15px;
		height: 15px;
	}
	.btn-false {
		display: block;
		position: relative;
		width: 14px;
		height: 14px;
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 15px;
			height: 3px;
			background-color: #bf2929;
		}
		&::before {
			transform: translate(-50%, -50%) rotate(45deg);
		}
		&::after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
</style>