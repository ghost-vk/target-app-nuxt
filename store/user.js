import camelToDashFilter from '@/filters/camelToDash.filter'

const prefix = 'target_lead_'

const getItemFromLocalStorage = (itemName, prefix = 'target_lead_') => {
  if (!process.client) {
    return ''
  }

  const fullName = prefix + itemName

  let item = window.localStorage.getItem(fullName)
  if (!item) {
    item = item ? window.localStorage.getItem(camelToDashFilter(fullName)) : ''
  }

  return item
}

const setItemToLocalStorage = (itemName, itemValue, options) => {
  if (!process.client) {
    return
  }

  const prefix = options.prefix ? options.prefix : ''
  const fullName = camelToDashFilter(prefix + itemName)

  const expires = options.expires ? options.expires : 30

  window.localStorage.setItem(fullName, itemValue, { expires })
}

export const state = () => ({
  lead: {
    name:  getItemFromLocalStorage('name'),
    phone: getItemFromLocalStorage('phone'),
    contactType: getItemFromLocalStorage('contact_type'),
    countryCode: getItemFromLocalStorage('country_code'),
  },
  isSetFromLocalStorage: false
})

export const mutations = {
  updateLeadData(state, data) {
    data.forEach((r) => {
      if (Object.keys(state.lead).includes(r.name) && r.val) {
        state.lead[r.name] = r.val
        setItemToLocalStorage(camelToDashFilter(r.name), r.val, { prefix, expires: 60 })
      }
    })
  },

  updateIsSetFromLocalStorage(state, value = true) {
    state.isSetFromLocalStorage = !!value
  }
}

export const actions = {
  setLead({ commit }, data) {
    if (Array.isArray(data)) {
      commit('updateLeadData', data)
    }
  },

  setLeadFromLocalStorage({ commit, state }) {
    const data = []

    Object.keys(state.lead).forEach(key => {
      const item = getItemFromLocalStorage(key)

      if (item) {
        data.push({ name: key, val: item })
      }
    })

    if (data.length > 0) {
      commit('updateLeadData', data)
    }

    commit('updateIsSetFromLocalStorage', true)
  }
}

export const getters = {
  lead: s => s.lead,
  isLeadSaved: s => s.lead.name.length && s.lead.phone.length && s.lead.contactType.length
}
