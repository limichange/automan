#!/usr/bin/env node

const puppeteer = require('puppeteer')
const { getCookies } = require('./getCookies')
const { url } = require('./config')

getCookies(async (cookies) => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()

  for await (let c of cookies) {
    try {
      await page.setCookie(c)
    } catch (e) {
      console.log(c.name)
    }
  }

  await page.goto(url)
  await page.waitFor(1000)
  await page.click('#Main > div.box > div:nth-child(2) > input')
  await page.waitFor(1000)
  browser.close()
})
