import { asyncLoadScript } from '@/utils/async-load-script.util'
import { logObject } from '@/utils/log-object.util'

const debug = true
const standardEvents = [
  'addpaymentinfo',
  'addtocart',
  'addtowishlist',
  'completeregistration',
  'contact',
  'customizeproduct',
  'donate',
  'findlocation',
  'initiatecheckout',
  'lead',
  'pageview',
  'purchase',
  'schedule',
  'search',
  'starttrial',
  'submitapplication',
  'subscribe',
  'viewcontent',
]

const _fbqEnabled = () => {
  if (typeof window.fbq === 'undefined') {
    if (debug) {
      console.log('[Vue Facebook Pixel]: `window.fbq` is not defined, skipping')
    }

    return false
  }

  return true
}

const query = (...args) => {
  if (!_fbqEnabled()) return

  if (debug) {
    console.groupCollapsed(`[Vue Facebook Pixel] Raw query`)
    console.log(`With data: `, ...args)
    console.groupEnd()
  }

  window.fbq(...args)
}

const event = (name, data = {}) => {
  if (!_fbqEnabled()) return

  if (debug) {
    console.groupCollapsed(`[Vue Facebook Pixel] Track event "${name}"`)
    console.log('With data:')
    logObject(data)
    console.groupEnd()
  }

  if (!standardEvents.includes(name.toLowerCase())) {
    query('trackCustom', name, data)
  } else {
    query('track', name, data)
  }
}

const init = async (appId) => {
  try {
    if (window.fbq) return

    window.fbq = function () {
      window.fbq.queue = window.fbq.queue ? window.fbq.queue : []
      window.fbq.callMethod ? window.fbq.callMethod.apply(n, arguments) : window.fbq.queue.push(arguments)
    }

    const n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    })

    if (!window._fbq) window._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []

    if (!_fbqEnabled()) return

    await asyncLoadScript('https://connect.facebook.net/en_US/fbevents.js')

    if (debug) {
      console.log(`[Vue Facebook Pixel] Initializing app ${appId}`)
    }

    query('init', appId)
    event('PageView')
  } catch (e) {
    throw new Error(`An error occurs when try to init Facebook Pixel: ${e}`)
  }
}

export default (context, inject) => {
  inject('fbq', (methodName, ) => {
    switch (methodName) {
      case 'init': {
        return async (appId) => {
          await init(appId)

          context.app.router.afterEach(() => {
            event('PageView')
          })

          return true
        }
      }
      case 'event': {
        return event
      }
      case 'query': {
        return query
      }
      default: {
        return () => {}
      }
    }
  })
}
