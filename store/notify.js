import { UPDATE_NOTIFY } from '@/store/mutation-types'

export const state = () => ({
  isShown: false,
  title: '',
  text: '',
  type: '',
})

export const mutations = {
  [UPDATE_NOTIFY](state, options) {
    state.isShown = options.isShown
    state.type = options.type
    state.title = options.title
    state.text = options.text
  },
}

export const actions = {
  showNotify({ commit }, options) {
    commit(UPDATE_NOTIFY, { isShown: true, ...options })
  },

  disableNotify({ commit }) {
    commit(UPDATE_NOTIFY, { isShown: false })
  },
}

export const getters = {
  isShown: s => s.isShown,
  notify: s => ({
    title: s.title,
    text: s.text,
    type: s.type
  })
}
