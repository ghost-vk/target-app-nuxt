import { UPDATE_ACTIVE_CATEGORY } from '@/store/mutation-types'

export const state = () => ({
  currentCategory: 'target-setup'
})

export const mutations = {
  [UPDATE_ACTIVE_CATEGORY](state, category) {
    state.currentCategory = category
  }
}

export const actions = {
  changeCurrentCategory({ commit }, category) {
    if (['target-setup', 'consultation', 'telegram-chat', 'mentor', 'course-facebook-2'].includes(category)) {
      commit(UPDATE_ACTIVE_CATEGORY, category)
      return
    }

    commit(UPDATE_ACTIVE_CATEGORY, 'target-setup')
  }
}

export const getters = {
  currentCategory: s => s.currentCategory
}
