export const asyncLoadScript = (src) => {
  return new Promise(function (resolve, reject) {
    let shouldAppend = false
    let el = document.querySelector('script[src="' + src + '"]')
    if (!el) {
      el = document.createElement('script')
      el.type = 'text/javascript'
      el.async = true
      el.src = src
      shouldAppend = true
    } else if (el.hasAttribute('data-loaded')) {
      resolve(el)
      return
    }

    el.addEventListener('error', () => {
      reject('Error event')
    })

    el.addEventListener('abort', () => {
      reject('Abort event')
    })

    el.addEventListener('load', () => {
      el.setAttribute('data-loaded', true)
    })

    if (shouldAppend) {
      document.head.appendChild(el)
    }

    resolve()
  })
}
