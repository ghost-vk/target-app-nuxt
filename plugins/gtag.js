import { asyncLoadScript } from '@/utils/async-load-script.util'

const debug = true

const _gtagEnabled = () => {
  if (typeof window.gtag === 'undefined') {
    if (debug) {
      console.log('[Vue Gtag]: `window.gtag` is not defined, skipping')
    }

    return false
  }

  return true
}

const query = (...args) => {
  if (!_gtagEnabled()) return

  if (debug) {
    console.groupCollapsed(`[Vue Gtag] Raw query`)
    console.log(`With data: `, ...args)
    console.groupEnd()
  }

  window.gtag(...args)
}

const init = async (appId) => {
  try {
    if (window.gtag) return

    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())

    if (!_gtagEnabled()) return

    await asyncLoadScript(
      `https://www.googletagmanager.com/gtag/js?id=${appId}`
    )

    if (debug) {
      console.log(`[Vue Gtag] Initializing app ${appId}`)
    }

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
