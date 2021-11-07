<template lang='pug'>
.skill__content
	.skill.skill__add
		.skill__prof.skill__input
		.skill__perc.skill__input
		.group__btns-wrap
			button(type="button" name="group-edit-btn").edit-btn
			button(type="button" name="group-delete-btn").delete-btn
	.skill.skill_new
		input(:disabled="false" :value="''" name="prof-name").skill__prof.skill__input
		input(:disabled="false" :value="''" name="percent" type="number" min="0" max="100").skill__perc.skill__input
		.group__btns-wrap
			button(type="button" name="group-edit-btn").btn-true
			button(type="button" name="group-delete-btn").btn-false
</template>

<script>
	
</script>

<style lang="postcss" scoped>

	.group__btns-wrap{
		margin-left: 10px;
		min-width: 50px;
		justify-content: space-between;
		display: flex;
		align-items: center;
	}

	.skill {
		display: flex;
		justify-content: space-between;
		/* width: 100%; */
		margin-top: 10px;
		&:first-child {
			margin-top: 0;
		}
		&__prof {
			width: 60%;
		}
		&__perc {
			width: 75px;
			text-align: center;
		}
		&__input {
			display: block;
			border: none;
			outline: none;
			background: transparent;
			color: inherit;
			font-weight: 600;
			line-height: inherit;
			border-bottom: 1px solid transparent;
			font-size: 16px;
			&:focus {
				border-bottom: 1px solid $text-color;
			}
		}
	}

	.skill__add{
		display: none;
	}
</style>