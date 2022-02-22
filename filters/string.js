export function camelToDash (str) {
  return str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `_${letter.toLowerCase()}`)
}

export function cutStringByLength(str, len) {
  return str.length > Number(len)
    ? str.splice(Number(len), str.length - 1, str)
    : str
}
