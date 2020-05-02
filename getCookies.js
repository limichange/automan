const chrome = require('chrome-cookies-secure')
const { url } = require('./config')

exports.getCookies = (callback) => {
  chrome.getCookies(
    url,
    'puppeteer',
    function (err, cookies) {
      if (err) {
        console.log(err, 'error')
        return
      }
      console.log(cookies[4], 'cookies')
      callback(cookies)
    },
    'Default'
  ) // e.g. 'Profile 2'
}
