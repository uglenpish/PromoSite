import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const TOKEN = localStorage.getItem('access_token');

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = 'http://api.site.local:8000';
        Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
    },
    get(resource, slug='') {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[RW] ApiService ${error}`);
        })
    },
    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    }
}

export default ApiService;

export const GroupsService = {
    post(params) {
        return ApiService.post('group', params)
    },
    getCategories() {
        return ApiService.get('group')
    }
}