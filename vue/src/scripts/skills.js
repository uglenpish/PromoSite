import Vue from "vue";

const skill = {
	template: "#skill",
	props: ['skill'],
	mounted(){
		const circle = this.$refs["circle"];
		const dashArray = parseInt(
			getComputedStyle(circle).getPropertyValue("stroke-dasharray")
		);

		const percent =(dashArray/100)*(100-this.skill.percent);

		circle.style.strokeDashoffset = percent;
	},
};

const skillsRow = {
	template: "#skills-row",
	components: {
		skill,
	},
	props: ["category"]
};

new Vue({
	el: "#skills__component",
	template: "#skills-list",
	components: {
		skillsRow,
	},

	data(){
		return{
			skills:[]
		}
	},

	created(){
		const data = require("../data/skill.json");
		this.skills = data;
	}
});