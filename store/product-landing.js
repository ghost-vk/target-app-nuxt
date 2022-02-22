import { UPDATE_PRODUCT_MODAL_VISIBILITY, UPDATE_PRODUCT_BUY_METHOD } from '@/store/mutation-types'

export const state = () => ({
  isShown: false,
  isProductBuyThroughBot: true
})

export const mutations = {
  [UPDATE_PRODUCT_MODAL_VISIBILITY](state, val) {
    state.isShown = !!val
  },

  [UPDATE_PRODUCT_BUY_METHOD](state, val) {
    state.isProductBuyThroughBot = !!val
  }
}

export const actions = {
  showModal({ commit }) {
    commit(UPDATE_PRODUCT_MODAL_VISIBILITY, true)
  },

  hideModal({ commit }) {
    commit(UPDATE_PRODUCT_MODAL_VISIBILITY, false)
  },

  updateProductBuyMethod({ commit }, val) {
    commit(UPDATE_PRODUCT_BUY_METHOD, !!val)
  }
}

export const getters = {
  isShown: (s) => s.isShown,
  isProductBuyThroughBot: (s) => s.isProductBuyThroughBot,
}
