import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as getters from './getters'

//import menu from './modules/menu'
import module from './modules/module'
// import product from './modules/product'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    //actions,
    // getters,
    modules: {
        //menu,
        module,
        // product
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})