#!/usr/bin/env node

const puppeteer = require('puppeteer')
const { getCookies } = require('./getCookies')
const tasks = require('./tasks')
const chalk = require('chalk')

index()

async function index() {
  const browser = await puppeteer.launch({
    headless: false,
  })

  for await (let task of tasks) {
    try {
      const { name, run, url } = task
      console.log(chalk.green(name + ' start'))
      const page = await browser.newPage()
      await getCookies(page, url)
      await page.goto(url)
      await run(page)
      await page.close()
      console.log(chalk.green(name + ' end'))
    } catch (e) {
      console.log(chalk.red(name + ' error!'))
    }
  }

  browser.close()
}
