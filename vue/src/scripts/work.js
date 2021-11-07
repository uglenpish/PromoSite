import Vue from "vue";

const thumbs={
	template: "#slider-thumbs",
	props: {
		"works": Array,
		"currentWork": Object
	 },
};

const btns={
	template: "#slider-btns",
	props: {
    currentIndex: Number,
    worksCount: Number
  },
	computed: {
    prevBtnDisable () {
      return this.currentIndex === 0
    },
    nextBtnDisable () {
      return (this.currentIndex + 1) === this.worksCount
    }
  }
};

const display={
	template: "#slider-display",
	components: {thumbs, btns},
	props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
	computed: {
		reverseWorks(){
			const works = [...this.works];
			return works.reverse();
		},

		currentImageIndex () {
      return this.currentIndex + 1
    }
	}
};

const tags={
	template: "#slider-tags",
	props: ["tags"]
};

const card={
	template: "#slider-card",
	components: {tags},
	props: ["currentWork"],
	computed: {
		tagsArr() {
			return this.currentWork.skills.split(',');
		}
	},
};

new Vue({
	el: "#work__component",
	template: "#slider-work",
	components: {display, card},
	data(){
		return{
			works:[],
			currentIndex: 0,
		}
	},

	computed: {
		currentWork() {
			// return this.works[this.currentIndex];
			return this.works[0]
		}
	},

	// watch: {
	// 	currentIndex(val) {
	// 		this.makeInfiniteLoopIndex(val);
	// 	},
	// },

	methods: {
		// makeInfiniteLoopIndex(val){
		// 	const worksLenghtZero = this.works.length - 1;
  //     if (val > worksLenghtZero) this.currentIndex = 0;
  //     if (val < 0) this.currentIndex = worksLenghtZero;
		// 	console.log(val);
		// },

		makeArrWithRequireImg(array) {
			return array.map(item=>{
				const requirPic = require(`../images/content/work/${item.photo}`);
				item.photo = requirPic;
				return item; 
			})
		},

		changeSlide (direction) {

	    if (direction === "next") {
	      this.currentIndex++
	      this.moveElement(this.currentIndex)
	    } else {
	      this.moveElement(this.currentIndex)
	      this.currentIndex--
	    }
	  },

    moveElement(index) {
      const removed = this.works.splice(index, 1)
      const zero = this.works.splice(0, 1)

      this.works.splice(index-1, 0, zero[0])
      this.works.splice(0, 0, removed[0])
    },

    goToSlide (slideId) {
      this.currentIndex = slideId - 1
      this.moveElement(this.works.findIndex(work => work.id === slideId))
    }
	},

	created(){
		const data = require("../data/work.json");
		this.works = this.makeArrWithRequireImg(data);
	},
});