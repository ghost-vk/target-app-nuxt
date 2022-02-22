import {
  UPDATE_REVIEWS,
  UPDATE_REVIEWS_CATEGORY,
  UPDATE_REVIEWS_LOADING,
  UPDATE_REVIEWS_STATUS,
} from '@/store/mutation-types'

export const state = () => ({
  reviews: [],
  isLoading: true,
  loadingStatus: false,
  activeCategory: 'all',
  catButtons: [
    {
      value: 'all',
      title: 'Все отзывы',
    },
    {
      value: 'consultation',
      title: 'Консультации',
    },
    {
      value: 'target-setup',
      title: 'Настройка рекламы',
    },
    {
      value: 'telegram-chat',
      title: 'Telegram чат',
    },
    {
      value: 'free-products',
      title: 'Бесплатные продукты',
    },
  ],
})

export const mutations = {
  [UPDATE_REVIEWS](state, val) {
    state.reviews = val
  },
  [UPDATE_REVIEWS_LOADING](state, val) {
    state.isLoading = val
  },
  [UPDATE_REVIEWS_STATUS](state, val) {
    state.loadingStatus = val
  },
  [UPDATE_REVIEWS_CATEGORY](state, val) {
    state.activeCategory = val
  },
}

export const actions = {
  async load({ commit, state, dispatch }, options) {
    try {
      if (!options) {
        return
      }

      commit(UPDATE_REVIEWS_LOADING, true)

      const limit = options.limit ? `limit=${options.limit}&` : ''
      let data = await this.$axios.$get(
        `${this.$config.SERVER_PATH}/api/reviews/?${limit}ordered=1`
      )

      data = Array.isArray(data) && data.length > 0 ? data : []

      commit(UPDATE_REVIEWS, data)
      commit(UPDATE_REVIEWS_STATUS, true)

      return true
    } catch (e) {
      commit(UPDATE_REVIEWS_STATUS, false)
    }
  },

  updateActiveCategory({ commit }, val) {
    const availableCategories = [
      'target-setup',
      'consultation',
      'education',
      'telegram-chat',
      'free-products',
    ]

    if (availableCategories.includes(val)) {
      commit(UPDATE_REVIEWS_CATEGORY, val)
    } else {
      commit(UPDATE_REVIEWS_CATEGORY, 'all')
    }
  },

  reset({ commit }) {
    commit(UPDATE_REVIEWS, [])
    commit(UPDATE_REVIEWS_LOADING, true)
    commit(UPDATE_REVIEWS_STATUS, false)
  },
}

export const getters = {
  reviews(state) {
    return state.activeCategory === 'all'
      ? state.reviews
      : state.reviews.filter((r) => r.category === state.activeCategory)
  },
  isLoading: (s) => s.isLoading,
  loadingStatus: (s) => s.loadingStatus,
  activeCategory: (s) => s.activeCategory,
  catButtons: (s) => s.catButtons,
  reviewsCountInCategory: (s) => (cat) => {
    return cat === 'all'
      ? s.reviews.length
      : s.reviews.filter((r) => r.category === cat).length
  },
}
