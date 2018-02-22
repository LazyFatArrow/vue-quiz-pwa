import firebase from '@/firebase';

import { SET_PROFILE, LOGOUT } from './mutations';

const state = {
  profile: {},
  loggedIn: false
};

const getters = {
  profile: ({profile}) => profile,
  loggedIn: ({loggedIn}) => loggedIn
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.loggedIn = true;
    state.profile = {
      name: profile.displayName,
      picture: profile.photoURL
    };
  },

  [LOGOUT](state) {
    state.loggedIn = false;
    state.profile = {};
  }
};

const actions = {
  async login(store) {
    // if user is already logged in return
    if (store.state.loggedIn)
      return;

    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
    } catch(error) {
      console.log(error);
    }
  },

  async logout() {
    try {
      await firebase.auth().signOut();
    } catch(error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};