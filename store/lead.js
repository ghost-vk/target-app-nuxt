import {
  parsePhoneNumberFromString,
  isValidPhoneNumber,
} from 'libphonenumber-js'
import { lidFormSchema } from '@/validation/yup-config'
import { cutStringByLength } from '@/filters/string'
import {
  UPDATE_CONTACT_TYPE_BUTTONS,
  UPDATE_CHECK,
  UPDATE_NAME,
  UPDATE_PHONE,
  UPDATE_COUNTRY_CODE,
  UPDATE_ERROR_VALUE,
  UPDATE_LID_SOURCE,
  SHOW_MODAL,
  HIDE_MODAL,
  UPDATE_NOTIFICATION,
  UPDATE_CONTACT_TYPE,
  UPDATE_NEED_OF_COMMUNICATION,
  UPDATE_LOADING,
} from '@/store/mutation-types'

export const state = () => ({
  isShown: false,

  values: {
    name: '',
    phone: '',
    check: false, // Privacy
    contactType: "What's App",
    source: '', // From where the form is opened
    countryCode: 'RU',
    shouldCallback: true,
  },

  errors: {
    name: '',
    phone: '',
    check: '',
  },

  contactTypeButtons: [
    {
      title: "What's App",
      value: 'wa',
      selected: true,
    },
    {
      title: 'Telegram',
      value: 'tg',
      selected: false,
    },
    {
      title: 'Viber',
      value: 'vb',
      selected: false,
    },
    {
      title: 'Звонок',
      value: 'cl',
      selected: false,
    },
  ],

  notification: {
    isShown: false,
    sendingFormStatus: true,
  },

  loading: false,
})

export const mutations = {
  [UPDATE_CONTACT_TYPE_BUTTONS](state, btn) {
    state.contactTypeButtons.forEach((item) => {
      item.selected = btn.value === item.value
    })
  },
  [UPDATE_CONTACT_TYPE](state, value) {
    state.values.contactType = value
  },
  [UPDATE_CHECK](state, newVal) {
    state.values.check = newVal
  },
  [UPDATE_NAME](state, val) {
    state.values.name = val
  },
  [UPDATE_PHONE](state, val) {
    state.values.phone = val
  },
  [UPDATE_COUNTRY_CODE](state, val) {
    state.values.countryCode = val
  },
  [UPDATE_ERROR_VALUE](state, data) {
    state.errors[data.name] = data.val
  },
  [UPDATE_LID_SOURCE](state, source) {
    state.values.source = source
  },
  [SHOW_MODAL](state) {
    state.isShown = true
  },
  [HIDE_MODAL](state) {
    state.isShown = false
  },
  [UPDATE_NOTIFICATION](state, value) {
    state.notification = value
  },
  [UPDATE_NEED_OF_COMMUNICATION](state, value) {
    state.values.shouldCallback = value
  },
  [UPDATE_LOADING](state, val) {
    state.loading = val
  },
}

export const actions = {
  showDialog({ commit, dispatch }, options) {
    dispatch('lead/setLeadWithCookies', {}, { root: true })

    commit(UPDATE_NEED_OF_COMMUNICATION, !!options.shouldCallback)
    commit(SHOW_MODAL)

    const source = typeof options === 'string' ? options : options.source
    commit(UPDATE_LID_SOURCE, cutStringByLength(source, 255))
  },

  hideModal({ commit }) {
    commit(HIDE_MODAL)
  },

  async onSubmit({ commit, getters, dispatch }) {
    try {
      commit(UPDATE_LOADING, true)

      await lidFormSchema.validate(getters.fieldValues, { abortEarly: false })

      for (const [key] of Object.entries(getters.fieldErrors)) {
        commit(UPDATE_ERROR_VALUE, { name: key, val: '' })
      }

      await this.$axios.post(
        `${this.$config.SERVER_PATH}/api/lid`,
        getters.fieldValues
      )

      if (!getters.fieldValues.shouldCallback) {
        await dispatch('magnets/onGettingMagnet', null, { root: true })
      }

      commit(HIDE_MODAL)

      const parsedPhone = parsePhoneNumberFromString(
        getters.fieldValues.phone,
        getters.fieldValues.countryCode
      )?.formatInternational()

      dispatch(
        'user/setLead',
        [
          {
            name: 'name',
            val: getters.fieldValues.name,
          },
          {
            name: 'phone',
            val: parsedPhone,
          },
          {
            name: 'contactType',
            val: getters.contactTypeButtons.filter((b) => b.selected)[0].value,
          },
          {
            name: 'countryCode',
            val: getters.fieldValues.countryCode,
          },
        ],
        { root: true }
      )

      dispatch('lead/resetValues', {}, { root: true })

      const text = getters.fieldValues.shouldCallback
        ? `Мы получили вашу заявку. В скором времени свяжемся с вами в ${getters.fieldValues.contactType}.`
        : `Документ должен открыться в новой вкладке. Если этого не произошло, нажмите <a href="${getters['magnets/linkToRedirect']}" target='_blank'>здесь.</a>`

      dispatch(
        'notify/showNotify',
        { type: 'success', title: 'Готово', text },
        { root: true }
      )
    } catch (err) {
      if (err.request) {
        dispatch(
          'notify/showNotify',
          {
            type: 'warn',
            title: 'Ошибка',
            text: 'Проверьте интернет соединение',
          },
          { root: true }
        )
      }

      err?.inner?.forEach((error) => {
        commit(UPDATE_ERROR_VALUE, { name: error.path, val: error.message })
      })
    } finally {
      commit(UPDATE_LOADING, false)
    }
  },

  switchContactType({ commit, state }, value) {
    const switchTo = state.contactTypeButtons.filter(
      (i) => i.value === value && !i.selected
    )

    if (switchTo.length === 1) {
      commit(UPDATE_CONTACT_TYPE_BUTTONS, switchTo[0])
      commit(UPDATE_CONTACT_TYPE, switchTo[0].title)
    }
  },

  toggleCheck({ commit, state, dispatch }) {
    commit(UPDATE_CHECK, !state.values.check)
    dispatch('lead/validate', 'check', { root: true })
  },

  async updateName({ commit, dispatch }, value) {
    commit(UPDATE_NAME, value)
    await dispatch('lead/validate', 'name', { root: true })
  },

  async updatePhone({ commit, dispatch }, value) {
    commit(UPDATE_PHONE, value)
    await dispatch('lead/validate', 'phone', { root: true }) // yup validation
    dispatch('lead/validatePhone', {}, { root: true }) // libhonenumber-js validation
  },

  updateCountry({ commit, dispatch }, value) {
    const availableCodes = ['RU', 'UA', 'BY', 'KZ', 'UZ', 'TJ', 'AZ']

    if (availableCodes.find((code) => code === value)) {
      commit(UPDATE_COUNTRY_CODE, value)
    }
  },

  async validate({ commit, state, getters }, field) {
    try {
      await lidFormSchema.validateAt(field, getters.fieldValues)
      commit(UPDATE_ERROR_VALUE, { name: field, val: '' })
    } catch (err) {
      commit(UPDATE_ERROR_VALUE, { name: field, val: err.errors[0] })
    }
  },

  validatePhone({ commit, getters }) {
    if (
      isValidPhoneNumber(
        getters.fieldValues.phone,
        getters.fieldValues.countryCode
      )
    ) {
      commit(UPDATE_ERROR_VALUE, { name: 'phone', val: '' })
    } else {
      commit(UPDATE_ERROR_VALUE, {
        name: 'phone',
        val: 'Номер телефона не действителен',
      })
    }
  },

  setLidSource({ commit }, source) {
    if (typeof source === 'string' && source.length > 0) {
      commit(UPDATE_LID_SOURCE, source)
    }
  },

  setLeadWithCookies({ rootState, dispatch }) {
    if (rootState.user.isSetFromLocalStorage) {
      return
    }

    dispatch('user/setLeadFromLocalStorage', null, { root: true })

    const lead = rootState.user.lead

    if (lead.name) {
      dispatch('lead/updateName', lead.name, { root: true })
    }

    if (lead.phone) {
      dispatch('lead/updatePhone', lead.phone, { root: true })
    }

    if (lead.contactType) {
      dispatch('lead/switchContactType', lead.contactType, { root: true })
    }
  },

  resetValues({ commit }) {
    commit(UPDATE_CHECK, false)
    commit(UPDATE_NAME, '')
    commit(UPDATE_PHONE, '')
    commit(UPDATE_LID_SOURCE, '')
    commit(UPDATE_ERROR_VALUE, { name: 'name', val: '' })
    commit(UPDATE_ERROR_VALUE, { name: 'phone', val: '' })
    commit(UPDATE_ERROR_VALUE, { name: 'check', val: '' })
    commit(UPDATE_NEED_OF_COMMUNICATION, true)
  },

  updateNotification({ commit }, data) {
    if (typeof data === 'object') {
      commit(UPDATE_NOTIFICATION, data)
    }
  },

  updateLoading({ commit }, val) {
    commit(UPDATE_LOADING, !!val)
  },
}

export const getters = {
  isModalShown: (s) => s.isShown,
  notification: (s) => s.notification,
  sendingStatus: (s) => s.notification.sendingFormStatus,
  contactTypeButtons: (s) => s.contactTypeButtons,
  checkPrivacy: (s) => s.checkPrivacy,
  fieldValues: (s) => s.values,
  fieldErrors: (s) => s.errors,
  contactType: (s) => s.contactType,
  loading: (s) => s.loading,
}
