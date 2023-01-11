import { UPDATE_BANNERS } from '@/store/mutation-types'

export const state = () => ({
  banners: [],
})

export const mutations = {
  [UPDATE_BANNERS](state, banners) {
    if (!banners) {
      state.banners = []
      return
    }
    state.banners = banners
  },
}

export const actions = {
  async fetchActiveBanners({ commit, state }) {
    try {
      if (state.banners.length > 0) {
        return
      }

      const response = await this.$axios.$get(
        `${this.$config.API_URL}/banners?options=active`
      )

      if (!Array.isArray(response)) {
        commit(UPDATE_BANNERS, [])
        return
      }

      if (response.length > 1) {
        response.sort((a, b) => -(a.priority - b.priority))
      }

      commit(UPDATE_BANNERS, response)
    } catch (e) {
      commit(UPDATE_BANNERS, [])
    }
  },
}

export const getters = {
  banners: (s) => s.banners,
}
