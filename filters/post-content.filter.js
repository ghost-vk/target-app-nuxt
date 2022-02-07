const expandComponent = (match, baseUrl) => {
  const component = {}

  match
    .replace('{{', '')
    .replace('}}', '')
    .split('|')
    .filter((p) => p)
    .forEach((p) => {
      const keyVal = p.trim().split('=')
      component[keyVal[0]] = keyVal[1]
    })

  if (component.name === 'image') {
    component.style = component.style ? component.style : ''
    component.alt = component.alt ? component.alt : ''
    return `<img class="rounded w-full mx-auto my-4" style="${component.style}" src="${baseUrl}${component.src}" alt="${component.alt}" loading="lazy">`
  }

  return ''
}

export const postContentFilter = (content, baseUrl = '') => {
  if (!content || typeof content !== 'string') {
    return ''
  }

  return content
    .replace(/<h3>/g, '<h3 class="text-3xl font-semibold mt-20 mb-8">')
    .replace(/<h4>/g, '<h4 class="text-2xl font-semibold mt-16 mb-6">')
    .replace(/<h5>/g, '<h5 class="text-xl font-semibold mt-12 mb-4">')
    .replace(/<h6>/g, '<h6 class="text-xl font-semibold mt-8 mb-3">')
    .replace(/<p>/g, '<p class="mb-3">')
    .replace(/<div>/g, '<div class="mb-3">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-3">')
    .replace(/\{{.+?\}}/gm, (val) => {
      return expandComponent(val, baseUrl)
    })
}
