import Vue from 'vue';
import Vuex from 'vuex';

import user from '@/store/user';
import quiz from '@/store/quiz';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    awesome: true
  },

  modules: {
    user,
    quiz
  }
});

export default store;