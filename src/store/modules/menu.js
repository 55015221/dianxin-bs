/**
 * 先写个假数据
 * @type {{totalTime: number, list: *[]}}
 */
import response from '../../../static/mock/data.json'

const state = {
    loading: false,
    menuList: []
}

const types = {
    GET_MENU_LIST_PENDING: 'GET_MENU_LIST_PENDING',
    GET_MENU_LIST_SUCCESS: 'GET_MENU_LIST_SUCCESS',
    GET_MENU_LIST_FAILURE: 'GET_MENU_LIST_FAILURE'
}

// actions
const actions = {
    getMenuList({ commit }, payload) {
        commit(types.GET_MENU_LIST_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_MENU_LIST_SUCCESS, response.data.menuList)
            } else {
                commit(types.GET_MENU_LIST_FAILURE)
            }
        }, 500)
        return response.data.menuList
    },
}

// mutations
const mutations = {
    [types.GET_MENU_LIST_PENDING](state) {
        state.loading = true
    },

    [types.GET_MENU_LIST_SUCCESS](state, data) {
        state.menuList = data
        state.loading = false
    },

    [types.GET_MENU_LIST_FAILURE](state, data) {
        state.loading = false
    },
}

export default {
    state,
    actions,
    mutations,
}
