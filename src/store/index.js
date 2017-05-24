import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
import github from './modules/github';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins,
  strict: true,
  modules: {
    github,
  },
});
