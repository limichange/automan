const chrome = require('chrome-cookies-secure')

exports.getCookies = (page, url) => {
  return new Promise((resolve, reject) => {
    chrome.getCookies(
      url,
      'puppeteer',
      async function (err, cookies) {
        if (err) {
          console.log(err, 'error')
          reject(err)
          return
        }

        for await (let c of cookies) {
          try {
            await page.setCookie(c)
          } catch (e) {
            console.log(c.name)
          }
        }

        resolve()
      },
      'Default'
    )
  })
}
