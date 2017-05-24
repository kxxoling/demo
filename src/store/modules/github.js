import axios from 'axios';

const state = {
  username: 'kxxoling',
  repoId: 'kxxoling/demo',
  users: {},
  repos: {},
};

const actions = {
  getUserInfo({ commit }, username) {
    const api = `https://api.github.com/users/${username}`;
    axios.get(api)
    .then(rsp => commit('setUserInfo', { username, payload: rsp.data }));
  },
  getRepoData({ commit }, repoId) {
    const api = `https://api.github.com/repos/${repoId}`;
    axios.get(api)
    .then(rsp => commit('setRepoData', { repoId, payload: rsp.data }));
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  setUserInfo(state_, { username, payload }) {
    state_.users = {
      ...state_.users,
      [username]: payload,
    };
  },
  setRepoData(state_, { repoId, payload }) {
    state_.repos = {
      ...state_.repos,
      [repoId]: payload,
    };
  },
};
/* eslint-enable no-param-reassign */

const getters = {
  user: state_ => state_.users[state_.username] || {},
  repo(state_) {
    return state_.repos[state_.repoId] || {};
  },
  users: state_ => state_.users,
  repoId: state_ => state_.repoId,
  username: state_ => state_.username,
  repos: state_ => state_.repos,
};

export default {
  getters,
  state,
  actions,
  mutations,
};
