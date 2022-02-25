import Vue from 'vue'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, { offset: 70 })

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getElement = (nodeId) => document.querySelector(`#${nodeId}`)

export default async function ({ route }) {
  if (!process.client) {
    return
  }

  const nodeId = route.query?.show_node

  if (!nodeId) {
    return
  }

  await sleep(1000)
  let el = getElement(nodeId)

  let i = 0
  while (!el || i < 3) {
    el = getElement(nodeId)

    if (!el) {
      await sleep(1000)
    }

    i += 1
  }

  if (!el) {
    return
  }

  Vue.prototype.$smoothScroll({
    scrollTo: el,
    hash: `#${nodeId}`,
  })
}
