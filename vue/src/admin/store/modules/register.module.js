import { REGISTER } from "../action.type";
import { SET_USER, SET_ERROR } from "../mutations.type";
import ApiService from "../../common/api.service";

const state = {
    access_token: '',
    user: {},
    errors: null,
}

const actions = {
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post('user', {user: credentials})
                .then(({ data }) => {
                    context.commit(SET_USER, data.user)
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                    reject(response);
                })
        })
    }
}

const mutations = {
    [SET_USER](state, user) {
        state.user = user;
        state.access_token = user.access_token;
    },
    [SET_ERROR](state, data) {
        state.errors = data;
    }
}

export default {
    actions,
    mutations,
    state,
}