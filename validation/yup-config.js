import * as yup from 'yup'

const em = {
  required: 'Поле обязательно для заполнения',
  phone: 'Номер телефона не действителен',
  checkPrivacy: 'Требуется согласие на обработку пользовательских данных',
  shouldNumber: 'Требуется числовое значение',
  shouldInt: 'Требуется целочисленное значение',
  shouldPositive: 'Требуется значение больше нуля',
  overMaxLength: (e) => `Максимально ${e.max} символов`
}

export const lidFormSchema = yup.object().shape({
  name: yup.string().required(em.required).max(50, em.overMaxLength),
  phone: yup.string().required(em.required),
  check: yup.boolean().oneOf([true], em.checkPrivacy),
})

const positiveInteger = yup
  .number()
  .typeError(em.shouldNumber)
  .required(em.required)
  .integer(em.shouldInt)
  .positive(em.shouldPositive)

const positiveFloat = yup
  .number()
  .typeError(em.shouldNumber)
  .required(em.required)
  .positive(em.shouldPositive)

export const campaignBudgetCalculatorSchema = yup.object().shape({
  orderQuantity: positiveInteger,
  itemPrice: positiveFloat,
  visitors: positiveInteger,
  orderPerMonth: positiveInteger,
  successOrderPerMonth: positiveInteger,
  costPerClick: positiveFloat
})
