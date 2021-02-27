const link = document.getElementById('link-yandex')
const specifiedLink = 'https://google.com'
const storeName = 'clickCounts'

link.addEventListener('click', clickLink)
link.addEventListener('auxclick', auxClickLink) //Mouse Wheel Button

function clickLink(event) {
  event.preventDefault()
  const url = event.target.href
  setCounts(storeName)
  window.open(url, '_blank', 'noopener,noreferrer')
  window.location.href = specifiedLink
}

function auxClickLink(event) {
  if (event.button === 1) setCounts(storeName) // If mouse wheel button clicked
  window.location.href = specifiedLink
}

function setCounts(storeName) {
  const counts = getCounts(storeName) + 1
  window.localStorage.setItem(storeName, counts)
  document.cookie = `${storeName} = ${counts}; samesite=strict`
}

function getCounts(storeName) {
  const ls = parseInt(window.localStorage.getItem(storeName)) || 0
  const cookie = parseInt(getCookie(storeName)) || 0
  return Math.max(ls, cookie)
}

function getCookie(name) {
  const matches = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")
    )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
