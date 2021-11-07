// import $axios from '../../logoSetting'

export default{
	namespaced: true,
	state: {
		categories: []
	},

	mutaions: {

	},

	actions:{
		
		addCategory({store}, title){
			try	{
				console.log(title);
				return 'ok'
			} catch(e) {

			}
		}
	},
}