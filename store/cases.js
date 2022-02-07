import { UPDATE_CASES, UPDATE_CASES_LOAD_STATUS } from '@/store/mutation-types'

export const state = () => ({
  cases: [],
  status: {
    loaded: false,
    failed: false,
  },
})

export const mutations = {
  [UPDATE_CASES](state, val) {
    state.cases = val
  },
  [UPDATE_CASES_LOAD_STATUS](state, status) {
    state.status[status.name] = status.val
  },
}

export const actions = {
  async loadCases({ commit, dispatch, state }, limit = 10) {
    try {
      if (state.status.loaded || state.cases.length > 0) {
        return
      }

      const queryLimit = Number(limit) > 0 ? `&limit=${limit}` : ''

      const response = await this.$axios.$get(
        `${this.$config.SERVER_PATH}/api/posts/?category=1&fullmode=0${queryLimit}`
      )
      commit(UPDATE_CASES, response.data)

      if (state.status.failed) {
        dispatch(
          'cases/updateStatus',
          { name: 'failed', val: false },
          { root: true }
        )
      }
      dispatch(
        'cases/updateStatus',
        { name: 'loaded', val: true },
        { root: true }
      )

      return state.cases
    } catch (err) {
      dispatch(
        'cases/updateStatus',
        { name: 'failed', val: true },
        { root: true }
      )
    }
  },

  updateStatus({ commit }, status) {
    commit(UPDATE_CASES_LOAD_STATUS, { name: status.name, val: status.val })
  },
}

export const getters = {
  cases(state) {
    return state.cases
  },
  status(state) {
    return state.status
  },
  casesCount(state) {
    return state.cases.length
  },
}
