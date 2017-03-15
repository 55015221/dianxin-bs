import Vue from 'vue'
import Vuex from 'vuex'

//import menu from './modules/menu'
import module from './modules/module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    //actions,
    //getters,
    modules: {
        //menu,
        module
    },
    strict: debug,
    //plugins: debug ? [createLogger()] : []
})