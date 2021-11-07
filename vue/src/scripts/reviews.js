import Vue from "vue";
import Flickity from 'vue-flickity';



const slide = {
	template: "#reviews-slide",
	
};


new Vue({
	el: "#reviews-component",
	template: "#reviews-content",
	components: {slide, Flickity},

	data() {
		return {
			reviews: [],
			flickityOptions: {
				initialIndex: 0,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: false,
				groupCells: true,
				freeScroll: false,
				contain: true,
			},
		}
	},
	methods: {
		next() {
		  this.$refs.flickity.next();
		  this.checkActiv();
		},
		previous() {
		  this.$refs.flickity.previous();
		  this.checkActiv();
		},
	
		checkActiv() {
			if (this.$refs.flickity.selectedIndex() == 0) {
				this.$el.querySelector('.slider__arrow-btn--prev').disabled = true;
			} else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
				this.$el.querySelector('.slider__arrow-btn--next').disabled = true;
			} else {
				this.$el.querySelector('.slider__arrow-btn--prev').disabled = false;
				this.$el.querySelector('.slider__arrow-btn--next').disabled = false;
			}
		},

		makeRequireImg(array) {
			return array.map(item => {
				const requireImg = require(`../images/content/${item.avatar}`);
				item.avatar = requireImg;
				return item;
			})
		},
	},

	

	created() {
		const data = require('../data/reviews.json');
	}
});