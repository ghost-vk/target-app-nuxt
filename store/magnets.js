import {
  UPDATE_MAGNETS,
  UPDATE_MAGNETS_ID,
  UPDATE_MAGNETS_REDIRECT_LINK,
  UPDATE_MAGNETS_STATUS,
} from '@/store/mutation-types'

export const state = () => ({
  linkToRedirect: null,
  magnets: [],
  currentID: null,
  status: {
    loadingMagnets: false,
    isMagnetsLoaded: false,
  },
})

export const mutations = {
  [UPDATE_MAGNETS](state, magnets) {
    state.magnets = magnets
  },
  [UPDATE_MAGNETS_ID](state, id) {
    state.currentID = id
  },
  [UPDATE_MAGNETS_REDIRECT_LINK](state, link) {
    state.linkToRedirect = link
  },
  [UPDATE_MAGNETS_STATUS](state, options) {
    state.status[options.name] = options.val
  },
}

export const actions = {
  async loadAll({ commit }) {
    commit(UPDATE_MAGNETS_STATUS, { name: 'loadingMagnets', val: true })
    try {
      const data = await this.$axios.$get(
        `${this.$config.SERVER_PATH}/api/magnets`
      )

      Array.isArray(data)
        ? data.map((m) => {
            m.link = ''
            m.image = m.image ? SERVER_PATH + m.image : ''

            return m
          })
        : data

      commit(UPDATE_MAGNETS, data)
      commit(UPDATE_MAGNETS_STATUS, { name: 'isMagnetsLoaded', val: true })
      commit(UPDATE_MAGNETS_STATUS, { name: 'loadingMagnets', val: false })

      return true
    } catch (err) {
      commit(UPDATE_MAGNETS_STATUS, { name: 'isMagnetsLoaded', val: false })
      commit(UPDATE_MAGNETS_STATUS, { name: 'loadingMagnets', val: false })

      return false
    }
  },

  setID({ commit }, id) {
    const _id = Number(id)
    if (!_id) {
      return false
    }
    commit(UPDATE_MAGNETS_ID, _id)
  },

  async fetchMagnetLink({ commit, state }) {
    try {
      const data = await this.$axios.$get(
        `${this.$config.SERVER_PATH}/api/magnets/${state.currentID}/?link=1`
      )
      commit(UPDATE_MAGNETS_REDIRECT_LINK, data.link)
      return data
    } catch (err) {
      return false
    }
  },

  async onGettingMagnet({ dispatch, state }) {
    try {
      await dispatch('magnets/fetchMagnetLink', {}, { root: true })

      setTimeout(() => {
        if (state.linkToRedirect) {
          window.open(state.linkToRedirect, '_blank')
        }
        return true
      }, 1500)
    } catch (err) {
      return false
    }
  },

  reset({ commit }) {
    commit(UPDATE_MAGNETS_ID, null)
    commit(UPDATE_MAGNETS_REDIRECT_LINK, null)
  },

  updateMagnets({ commit }, magnets) {
    const newMagnets = Array.isArray(magnets) ? magnets : []
    commit(UPDATE_MAGNETS, newMagnets)
  },
}

export const getters = {
  linkToRedirect: s => s.linkToRedirect,
  magnets: s => s.magnets,
  status: s => s.status,
}
