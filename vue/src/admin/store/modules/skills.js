import { GroupsService } from "../../common/api.service";
import { CREATE_CATEGORIES, GET_CATEGORIES } from "../action.type";
import { SET_GROUP, SET_CATEGORIES} from "../mutations.type";

const state = {
    groups: [],
    group_id: 0,
}

const actions = {
    [GET_CATEGORIES]({commit}) {
        return GroupsService.getCategories()
            .then((response) => {
                commit(SET_CATEGORIES, response.data);
            });
    },
    [CREATE_CATEGORIES](context, params) {
        return GroupsService.post(params)
            .then((response) => {
                context.commit(SET_GROUP, response.data);
            });
    }
}

const mutations = {
    [SET_GROUP](state, data) {
        state.group_id = data;
        state.showForm = true;
    },
    [SET_CATEGORIES](state, data) {
        state.groups = data;
    }
}

export default {
    state,
    actions,
    mutations,
}