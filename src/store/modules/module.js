/**
 * 通用的
 * 先写个假数据
 * @type {{totalTime: number, list: *[]}}
 */
import mockJson from '../../../static/mock/data.json'
import Vue from 'vue';


const state = {
    loading: false,
    records: [],
    menuList: []
}

const types = {
    GET_MENU_LIST_PENDING: 'GET_MENU_LIST_PENDING',
    GET_MENU_LIST_SUCCESS: 'GET_MENU_LIST_SUCCESS',
    GET_MENU_LIST_FAILURE: 'GET_MENU_LIST_FAILURE',


    GET_CONTACT_PENDING: 'GET_CONTACT_PENDING',
    GET_CONTACT_SUCCESS: 'GET_CONTACT_SUCCESS',
    GET_CONTACT_FAILURE: 'GET_CONTACT_FAILURE',
}


// getters
// const getters = {
//   getProduct: state => state.record
// }


// actions
const actions = {
    /**
     * 获取导航菜单
     */
        getMenuList({ commit }, payload) {
        commit(types.GET_MENU_LIST_PENDING)

        //开始ajax请求
        Vue.http.get('/api/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            // 响应成功回调
            if (response.status === 200 && response.body.code === 1000) {
                commit(types.GET_MENU_LIST_SUCCESS, response.body.data.menuList)
            } else {
                commit(types.GET_MENU_LIST_FAILURE)
            }
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    },
    /**
     * 获取联系方式
     */
    getContact({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            // 响应成功回调
            if (response.status === 200 && response.body.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.body.data.contact)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    },
    /**
     * 获取产品数据
     */
        getProduct({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            //为了模拟网速过慢 使用延时
            setTimeout(function () {
                // 响应成功回调
                if (response.status === 200 && response.body.code === 1000) {
                    commit(types.GET_CONTACT_SUCCESS, response.body.data.product)
                } else {
                    commit(types.GET_CONTACT_FAILURE)
                }
            }, 500)
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    },
    /**
     * 获取客户问答数据
     */
    getQuestions({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            // 响应成功回调
            if (response.status === 200 && response.body.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.body.data.questions)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    },
    /**
     * 获取关于我们数据
     */
    getAbout({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            // 响应成功回调
            if (response.status === 200 && response.body.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.body.data.about)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    },
    /**
     * 获取幻灯片数据
     */
    getSlider({ commit }, payload){
        commit(types.GET_CONTACT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json?method=' + payload.method, payload).then((response) => {
            // 响应成功回调
            if (response.status === 200 && response.body.code === 1000) {
                commit(types.GET_CONTACT_SUCCESS, response.body.data.slider)
            } else {
                commit(types.GET_CONTACT_FAILURE)
            }
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    }

}

// mutations
const mutations = {
    [types.GET_MENU_LIST_PENDING](state) {
        state.loading = true
    },

    [types.GET_MENU_LIST_SUCCESS](state, payload) {
        state.menuList = payload
        state.loading = false
    },

    [types.GET_MENU_LIST_FAILURE](state, payload) {
        state.loading = false
    },

    /**
     *  以下简化 只响应success
     */

        [types.GET_CONTACT_PENDING](state) {
        state.loading = true
    },

    [types.GET_CONTACT_SUCCESS](state, payload) {
        state.records = payload
        state.loading = false
    },

    [types.GET_CONTACT_FAILURE](state, payload) {
        state.loading = false
    },

}

export default {
    state,
    actions,
    mutations,
}
