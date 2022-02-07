export  default function camelToDashFilter (str) {
  return str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `_${letter.toLowerCase()}`)
}