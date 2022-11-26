import { campaignBudgetCalculatorSchema } from '@/validation/yup-config'
import { currencyFilter } from '@/filters/currency'
import {
  TOGGLE_MODAL,
  UPDATE_ORDER_QUANTITY,
  UPDATE_ITEM_PRICE,
  UPDATE_ERROR_VALUE,
  UPDATE_PROCEEDS_VALUE,
  UPDATE_VISITORS_AMOUNT,
  UPDATE_ORDER_PER_MONTH,
  UPDATE_SUCCESS_ORDER_PER_MONTH,
  UPDATE_CONVERSION_PERCENT,
  UPDATE_CONVERSION_SUCCESS_PERCENT,
  UPDATE_NEED_LID,
  UPDATE_NEED_VISITORS,
  UPDATE_COST_PER_CLICK,
  UPDATE_BUDGET_AMOUNT,
  UPDATE_FINAL_CALC_ERROR,
} from '@/store/mutation-types'

export const state = () => ({
  isShown: false,
  values: {
    orderQuantity: '',
    itemPrice: '',
    visitors: '',
    orderPerMonth: '',
    successOrderPerMonth: '',
    costPerClick: '',
  },
  errors: {
    orderQuantity: '',
    itemPrice: '',
    visitors: '',
    orderPerMonth: '',
    successOrderPerMonth: '',
    costPerClick: '',
  },
  finalCalcError: '',
  intermediateValues: {
    proceeds: {
      value: '',
      displayValue: '',
    },
    conversionPercent: {
      value: '',
      displayValue: '',
    },
    conversionSuccessPercent: {
      value: '',
      displayValue: '',
    },
    needLidCount: '',
    needVisitors: '',
    budget: {
      value: '',
      displayValue: '',
    },
  },
})

export const mutations = {
  [TOGGLE_MODAL](state, value) {
    state.isShown = value
  },
  [UPDATE_ORDER_QUANTITY](state, value) {
    state.values.orderQuantity = value
  },
  [UPDATE_ITEM_PRICE](state, value) {
    state.values.itemPrice = value
  },
  [UPDATE_ERROR_VALUE](state, data) {
    state.errors[data.name] = data.val
  },
  [UPDATE_PROCEEDS_VALUE](state, value) {
    state.intermediateValues.proceeds = value
  },
  [UPDATE_VISITORS_AMOUNT](state, value) {
    state.values.visitors = value
  },
  [UPDATE_ORDER_PER_MONTH](state, value) {
    state.values.orderPerMonth = value
  },
  [UPDATE_SUCCESS_ORDER_PER_MONTH](state, value) {
    state.values.successOrderPerMonth = value
  },
  [UPDATE_CONVERSION_PERCENT](state, value) {
    state.intermediateValues.conversionPercent = value
  },
  [UPDATE_CONVERSION_SUCCESS_PERCENT](state, value) {
    state.intermediateValues.conversionSuccessPercent = value
  },
  [UPDATE_NEED_LID](state, value) {
    state.intermediateValues.needLidCount = value
  },
  [UPDATE_NEED_VISITORS](state, value) {
    state.intermediateValues.needVisitors = value
  },
  [UPDATE_COST_PER_CLICK](state, value) {
    state.values.costPerClick = value
  },
  [UPDATE_BUDGET_AMOUNT](state, value) {
    state.intermediateValues.budget = value
  },
  [UPDATE_FINAL_CALC_ERROR](state, value) {
    state.finalCalcError = value
  },
}

export const actions = {
  toggleModal({ commit }, value) {
    commit(TOGGLE_MODAL, !!value)
  },

  updateOrderQuantity({ commit, dispatch }, value) {
    commit(UPDATE_ORDER_QUANTITY, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'orderQuantity', { root: true })
  },

  updateItemPrice({ commit, dispatch }, value) {
    commit(UPDATE_ITEM_PRICE, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'itemPrice', { root: true })
  },

  updateVisitors({ commit, dispatch }, value) {
    commit(UPDATE_VISITORS_AMOUNT, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'visitors', { root: true })
  },

  updateOrderPerMonth({ commit, dispatch }, value) {
    commit(UPDATE_ORDER_PER_MONTH, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'orderPerMonth', { root: true })
  },

  updateSuccessOrdersPerMonth({ commit, dispatch }, value) {
    commit(UPDATE_SUCCESS_ORDER_PER_MONTH, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'successOrderPerMonth', { root: true })
  },

  updateCostPerClick({ commit, dispatch }, value) {
    commit(UPDATE_COST_PER_CLICK, value.replace(',', '.'))
    dispatch('adcalculator/validate', 'costPerClick', { root: true })
  },

  async calc({ dispatch, getters, commit }) {
    try {
      await campaignBudgetCalculatorSchema.validate(getters.values, {
        abortEarly: false,
      })

      for (const [key] of Object.entries(getters.errors)) {
        commit(UPDATE_ERROR_VALUE, { name: key, val: '' })
      }

      if (getters.hasError) {
        return
      }

      const actions = [
        'adcalculator/calcProceeds',
        'adcalculator/calcConversion',
        'adcalculator/calcSuccessConversion',
        'adcalculator/calcNeedLid',
        'adcalculator/calcNeedVisitors',
        'adcalculator/calcBudget',
      ]

      actions.forEach((act) => {
        dispatch(act, {}, { root: true })
      })

      if (getters.calcError) {
        return
      }
    } catch (err) {
      // Calculation
      if (getters.calcError) {
        return
      }

      // Validation
      if (getters.hasError) {
        commit(
          UPDATE_FINAL_CALC_ERROR,
          'Проверьте, все ли поля были заполнены подходящими данными'
        )
        return
      }

      commit(UPDATE_FINAL_CALC_ERROR, `Ошибка: ${err}`)
    }
  },

  calcProceeds({ commit, state }) {
    const proceeds = state.values.orderQuantity * state.values.itemPrice

    if (proceeds > 0) {
      commit(UPDATE_PROCEEDS_VALUE, {
        value: proceeds,
        displayValue: currencyFilter(proceeds),
      })
    } else {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Проверьте поле "необходимое количество заявок" и "стоимость продажи", оба поля должны быть положительны'
      )
    }
  },

  calcConversion({ commit, state }) {
    if (+state.values.orderPerMonth > +state.values.visitors) {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Количество заявок больше количества посетителей'
      )
    }

    const conversion = +(
      (100 * state.values.orderPerMonth) /
      state.values.visitors
    ).toFixed(2)

    commit(UPDATE_CONVERSION_PERCENT, {
      value: conversion,
      displayValue: conversion + '%',
    })
  },

  calcSuccessConversion({ commit, state }) {
    if (+state.values.successOrderPerMonth > +state.values.orderPerMonth) {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Количество продаж больше количества заявок'
      )
    }

    const conversion = +(
      (100 * state.values.successOrderPerMonth) /
      state.values.orderPerMonth
    ).toFixed(2)

    commit(UPDATE_CONVERSION_SUCCESS_PERCENT, {
      value: conversion,
      displayValue: conversion + '%',
    })
  },

  calcNeedLid({ commit, state }) {
    if (!state.intermediateValues.conversionSuccessPercent.value) {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Не удалось рассчитать конверсию в продажи'
      )
    }

    commit(
      UPDATE_NEED_LID,
      Math.floor(
        (100 * +state.values.orderQuantity) /
          state.intermediateValues.conversionSuccessPercent.value
      )
    )
  },

  calcNeedVisitors({ commit, state }) {
    const needVisitorsFloat =
      (100 * state.intermediateValues.needLidCount) /
      state.intermediateValues.conversionPercent.value

    if (!needVisitorsFloat || needVisitorsFloat === 0) {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Не удалось рассчитать необходимое количество посетителей'
      )
    }

    commit(UPDATE_NEED_VISITORS, Math.floor(needVisitorsFloat))
  },

  calcBudget({ commit, state }) {
    const budget =
      state.intermediateValues.needVisitors * state.values.costPerClick

    if (!budget || budget <= 0) {
      commit(
        UPDATE_FINAL_CALC_ERROR,
        'Не удалось рассчитать бюджет, проверьте правильность заполнения полей'
      )
    }

    commit(UPDATE_BUDGET_AMOUNT, {
      value: budget,
      displayValue: currencyFilter(budget),
    })

    commit(UPDATE_ERROR_VALUE, { name: 'budget', value: '' })
  },

  validate({ commit, state, getters }, field) {
    return new Promise((resolve) => {
      campaignBudgetCalculatorSchema
        .validateAt(field, getters.values)
        .then(() => {
          commit(UPDATE_ERROR_VALUE, { name: field, val: '' })
          resolve()
        })
        .catch((err) => {
          commit(UPDATE_ERROR_VALUE, { name: field, val: err.errors[0] })
          resolve()
        })
    })
  },
}

export const getters = {
  isShown(state) {
    return state.isShown
  },
  values(state) {
    return state.values
  },
  errors(state) {
    return state.errors
  },
  intermediateValues(state) {
    return state.intermediateValues
  },
  hasError(state) {
    Object.values(state.errors).forEach(er => {
      if (er) {
        return true
      }
    })

    return false
  },
  calcError(state) {
    return state.finalCalcError
  },
}
