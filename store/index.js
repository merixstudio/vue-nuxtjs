import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export const state = () => ({
  item: {
    food_pairing: [],
  },
  items: [],
});

export const actions = {
  async loadItem ({ commit }, id) {
    const response = await Api.get(`/${id}`);

    commit('SET_ITEM', response.data[0]);
  },
  async loadItems ({ commit }, slug) {
    const response = await Api.get(`?food=${slug}`);

    commit('SET_ITEMS', response.data);
  },
};

export const mutations = {
  SET_ITEM (state, payload) {
    state.item = payload;
  },
  SET_ITEMS (state, payload) {
    state.items = payload;
  },
};
