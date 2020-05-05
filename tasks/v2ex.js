const config = {
  name: 'V2EX',
  url: `https://www.v2ex.com/mission/daily`,
  async run(page) {
    await page.waitFor(1000)
    await page.click('#Main > div.box > div:nth-child(2) > input')
    await page.waitFor(5000)
  },
}

module.exports = config
