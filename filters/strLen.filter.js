export default function strLenFilter(str, len) {
  return str.length > Number(len)
    ? str.splice(Number(len), str.length - 1, str)
    : str
}
