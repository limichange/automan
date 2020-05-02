const config = {
  name: '京东 京豆',
  url: `https://vip.m.jd.com/newPage/reward`,
  async run(page) {
    // todo run task

    while ((await checkTimes(page)) > 0) {
      await shake(page)
    }
  },
}

async function checkTimes(page) {
  const s =
    'body > div.wrapper > div.reward > div:nth-child(1) > div.rewardPageTop > p > span'
  await page.waitForSelector(s)
  const text = await page.$eval(s, (el) => el.textContent)
  return Number(text)
}

async function shake(page) {
  // click shake
  const shakeBtn =
    'body > div.wrapper > div.reward > div:nth-child(1) > div.rewardPageTop > div > div.rewardBoxBot.J_ping'
  await page.waitForSelector(shakeBtn)
  await page.click(shakeBtn)

  // click X
  const x =
    'body > div.wrapper > div.reward > div:nth-child(1) > div.common-popup-wrapper.rewardPopup > i.common-popup-close'
  await page.waitForSelector(x)
  await page.click(x)
  await page.waitFor(5000)
}

module.exports = config
