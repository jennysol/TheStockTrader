import Vue from 'vue'
import Vuex from 'vue'

import stocks from './modules/stocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks
    }
})