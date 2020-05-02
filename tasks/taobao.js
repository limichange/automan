const config = {
  name: 'taobao',
  url: `https://main.m.taobao.com/`,
  async run(page) {
    await page.waitFor(1000)
    // todo
    await page.waitFor(5000)
  },
}

module.exports = config
