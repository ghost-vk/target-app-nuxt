export function dateFilter(date) {
  const dateVal = new Date(date)
  if (!dateVal) {
    return false
  }

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

  const year = dateVal.getFullYear()
  let month = monthNames[dateVal.getMonth()]
  month = month < 10 ? `0${month}` : month
  let day = dateVal.getDate()
  day = day < 10 ? `0${day}` : day
  return `${day} ${month}. ${year}`
}
