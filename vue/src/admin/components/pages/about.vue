<template lang="pug">
    section.section.about
        .container-admin.container-admin_column
            .section__title-wrap
                h2.section-title Блок «Обо мне»
                button(
                    type="button"
                    @click="showAddGroup = true"
                ).about__btn Добавить группу
                    .about__btn-wrap
                        .btn-plus
            .about__content
                ul.about__content-list
                    li(v-if="showAddGroup").about__content-item
                        skillGroup(
                            @hide="hideAddGroup"
                            :skillGroup="category"
                        )
                    li.about__container-item(
                        v-for="category in categories"
                        :key="category.id"
                    )
                        skillGroup(:skillGroup="category")
</template>

<script>
import skillGroup from '../skillGroup';
import {GET_CATEGORIES} from "../../store/action.type";
import {mapState} from "vuex";

export default {
    components: {
        skillGroup,
    },
    data() {
        return {
            category: {
                category_id: ''
            },
            showAddGroup: false
        }
    },
    computed:{
        ...mapState({
            categories: state => state.skills.groups,
        })
    },
    created() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            this.$store.dispatch(GET_CATEGORIES);
        },
        hideAddGroup() {
            this.showAddGroup = false
        }
    }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";
/* about */
	
.about {
		
	&__btn {
		display: flex;
		flex-flow: row-reverse;
		margin-left: 60px;
		color: $links-color;
		font-weight: 700;
		@include phones {
			font-size: 14Px;
			margin: 20px 0 0 0;
		}
		&:hover .btn-plus {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		&-wrap {
			width: 20px;
			height: 20px;
			margin-right: 15px;
		}
	}
	&__content {
		width: 100%;
		&-list {
			width: 100%;
			display: flex;
		}

		&-item{
			width: calc(100% / 2 - 30px);
			margin-left: 30px;
			margin-bottom: 30px;
		}
	}
}
	
/* blue button plus  */
	.btn-plus {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		&:hover {
			background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
		}
		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			width: 40%;
			height: 7%;
			background: #fff;
		}
		
		&::after {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&::before {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(90deg);
		}
	}
</style>