/**
 * 通用的
 * 先写个假数据
 * @type {{totalTime: number, list: *[]}}
 */
import Vue from 'vue';


const state = {
    loading: false,
    record: []
}

const types = {
    GET_PRODUCT_PENDING: 'GET_PRODUCT_PENDING',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAILURE: 'GET_PRODUCT_FAILURE',
}


// actions
const actions = {

    /**
     * 获取产品数据
     */
    getProduct({ commit }, payload){
        commit(types.GET_PRODUCT_PENDING)
        //开始ajax请求
        Vue.http.get('/static/mock/data.json').then((response) => {
            //为了模拟网速过慢 使用延时
            setTimeout(function () {
                // 响应成功回调
                if (response.status === 200 && response.body.code === 1000) {
                    commit(types.GET_PRODUCT_SUCCESS, response.body.data.product)
                } else {
                    commit(types.GET_PRODUCT_FAILURE)
                }
            }, 500)
        }, (response) => {
            // 响应错误回调
            console.log("http error", response)
        });
    }


}

// mutations
const mutations = {

    /**
     *  以下简化 只响应success
     */

    [types.GET_PRODUCT_PENDING](state) {
        state.loading = true
    },

    [types.GET_PRODUCT_SUCCESS](state, payload) {
        state.record = payload
        state.loading = false
    },

    [types.GET_PRODUCT_FAILURE](state, payload) {
        state.loading = false
    },

}

export default {
    state,
    actions,
    mutations,
}
