import Vue from 'vue'
import Vuex from 'vue'

import stocks from './modules/stocks'
import portfolio from './modules/portifolio'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})