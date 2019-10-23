import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const state = () => ({
  items: [],
  item: {
    food_pairing: []
  }
})

export const actions = {
  async loadItems ({ commit }, slug) {
    const response = await Api.get(`?food=${slug}`)
    commit('SET_ITEMS', response.data)
  },
  async loadItem ({ commit }, id) {
    const response = await Api.get(`/${id}`)
    commit('SET_ITEM', response.data[0])
  }
}

export const mutations = {
  SET_ITEMS (state, payload) {
    state.items = payload
  },
  SET_ITEM (state, payload) {
    state.item = payload
  }
}
