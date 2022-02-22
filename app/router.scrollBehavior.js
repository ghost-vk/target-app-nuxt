export default function (to) {
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ selector: to.hash })
      }, 1000)
    })
  }

  return { x: 0, y: 0 }
}
