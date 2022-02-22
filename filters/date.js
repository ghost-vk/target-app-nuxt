const monthNames = [
  'ЯНВ',
  'ФЕВ',
  'МАР',
  'АПР',
  'МАЙ',
  'ИЮН',
  'ИЮЛ',
  'АВГ',
  'СЕН',
  'ОКТ',
  'НОЯ',
  'ДЕК',
]

export function date(date) {
  const dateVal = new Date(date)

  if (!dateVal) {
    return false
  }

  const year = dateVal.getFullYear()
  let month = monthNames[dateVal.getMonth()]
  let day = dateVal.getDate()

  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day

  return `${day} ${month}. ${year}`
}
