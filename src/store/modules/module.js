/**
 * 通用的
 * 先写个假数据
 * @type {{totalTime: number, list: *[]}}
 */
import response from '../../../static/mock/data.json'

const state = {
    loading: false,
    //menuList: []
}

const types = {
    GET_MENU_LIST_PENDING: 'GET_MENU_LIST_PENDING',
    GET_MENU_LIST_SUCCESS: 'GET_MENU_LIST_SUCCESS',
    GET_MENU_LIST_FAILURE: 'GET_MENU_LIST_FAILURE',


    GET_CONTACT_PENDING: 'GET_CONTACT_PENDING',
    GET_CONTACT_SUCCESS: 'GET_CONTACT_SUCCESS',
    GET_CONTACT_FAILURE: 'GET_CONTACT_FAILURE',
}

// actions
const actions = {
    /**
     * 获取导航菜单
     */
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
    /**
     * 获取联系方式
     */
    getContact({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.data.contact)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, 500)
        return response.data.contact
    },
    /**
     * 获取产品数据
     */
    getProduct({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.data.product)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, 500)
        return response.data.product
    },
    /**
     * 获取客户问答数据
     */
    getQuestions({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.data.questions)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, 500)
        return response.data.questions
    },
    /**
     * 获取关于我们数据
     */
    getAbout({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.data.about)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, 500)
        return response.data.about
    },
    /**
     * 获取幻灯片数据
     */
    getSlider({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        setTimeout(function () {
            if (response.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.data.slider)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, 500)
        return response.data.slider
    }

}

// mutations
const mutations = {
    [types.GET_MENU_LIST_PENDING](state) {
        state.loading = true
    },

    [types.GET_MENU_LIST_SUCCESS](state, res) {
        state.menuList = res
        state.loading = false
    },

    [types.GET_MENU_LIST_FAILURE](state, res) {
        state.loading = false
    },

    /**
     *  以下简化 只响应success
     */

    [types.GET_CONTACT_PENDING](state) {
        state.loading = true
    },

    [types.GET_CONTACT_SUCCESS](state, res) {
        state.record = res
        state.loading = false
    },

    [types.GET_CONTACT_FAILURE](state, res) {
        state.loading = false
    },

}

export default {
    state,
    actions,
    mutations,
}
