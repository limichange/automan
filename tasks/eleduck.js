const config = {
  name: '电鸭社区',
  url: `https://eleduck.com/posts/P2Lf41`,
  async run(page) {
    await page.waitFor(1000)
    // todo clear last text
    await page.focus('#textarea')
    await page.keyboard.type(new Date().getTime().toString())
    await page.click('#foot-coment-form > div > form > button')
    await page.waitFor(5000)
  },
}

module.exports = config
