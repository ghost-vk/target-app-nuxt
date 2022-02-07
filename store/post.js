import Debug from 'debug'
import { UPDATE_POST_VALUES, UPDATE_POST_STATUS } from '@/store/mutation-types'
import { postContentFilter } from '@/filters/post-content.filter'

const debug = Debug('store')

export const state = () => ({
  displayValues: {},
  status: {
    loaded: false,
    failed: false,
    notExist: false,
  },
})

export const mutations = {
  [UPDATE_POST_VALUES](state, data) {
    state.displayValues = data
  },
  [UPDATE_POST_STATUS](state, data) {
    state.status[data.name] = data.val
  },
}

export const actions = {
  async loadPost({ commit, dispatch }, id) {
    if (!Number(id)) {
      commit(UPDATE_POST_STATUS, { name: 'notExist', val: true })
      return
    }

    try {
      const data = await this.$axios.$get(
        `${this.$config.SERVER_PATH}/api/posts/${id}`
      )

      data.thumbnail = data.thumbnail
        ? this.$config.SERVER_PATH + data.thumbnail
        : ''
      data.case_stats = data.case_stats ? JSON.parse(data.case_stats) : null

      const screen = process.client ? window.innerWidth : 1025

      if (data.case_stats && screen <= 400 && data.case_stats.length > 2) {
        data.case_stats.splice(1, data.case_stats.length - 2)
      }

      data.content = postContentFilter(data.content, this.$config.SERVER_PATH)

      commit(UPDATE_POST_VALUES, data)

      commit(UPDATE_POST_STATUS, { name: 'loaded', val: true })

      return true
    } catch (err) {
      debug('Error occurs when fetch post:\n%o', err)

      commit(UPDATE_POST_STATUS, { name: 'failed', val: true })

      this.$router.push('/404')
    }
  },
}

export const getters = {
  displayValues: (s) => s.displayValues,
  status: (s) => s.status,
}
