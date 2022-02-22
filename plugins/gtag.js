import { asyncLoadScript } from '@/utils/async-load-script'
import Debug from 'debug'

const debug = new Debug('plugin')

const _gtagEnabled = () => {
  if (typeof window.gtag === 'undefined') {
    debug('[Vue Gtag]: `window.gtag` is not defined, skipping')

    return false
  }

  return true
}

const query = (...args) => {
  if (!_gtagEnabled()) {
    return
  }

  debug(`[Vue Gtag] Raw query\nWith data: %O`, ...args)

  window.gtag(...args)
}

const init = async (appId) => {
  try {
    if (window.gtag) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())

    if (!_gtagEnabled()) return

    await asyncLoadScript(
      `https://www.googletagmanager.com/gtag/js?id=${appId}`
    )

    debug('[Vue Gtag] Initializing app %s', appId)

    window.gtag('config', appId)
    query('page_view')
  } catch (e) {
    throw new Error(`An error occurs when try to init Google Analytics: ${e}`)
  }
}

export default (context, inject) => {
  inject('gtag', (methodName) => {
    switch (methodName) {
      case 'init': {
        return async (appId) => {
          await init(appId)

          context.app.router.afterEach(() => {
            query('page_view')
          })
        }
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
