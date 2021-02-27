const link = document.getElementById('link-yandex')
const specifiedLink = 'https://google.com'
const storeName = 'clickCounts'
let clickCounts = getCounts(storeName)

link.addEventListener('click', clickLink)

function clickLink(event) {
  event.preventDefault()
  const url = event.target.href

  clickCounts++
  window.localStorage.setItem(storeName, clickCounts)
  document.cookie = `${storeName} = ${clickCounts}; samesite=strict`
  console.log(clickCounts)

  window.open(url, '_blank', 'noopener,noreferrer')
  window.location.href = specifiedLink
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