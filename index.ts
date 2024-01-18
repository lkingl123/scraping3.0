const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from 'puppeteer'
import { ADMIN_EMAIL, ADMIN_PASSWORD} from './secret'

puppeteer.use(StealthPlugin())

const {executablePath} = require('puppeteer')

// const url = 'https://bot.sannysoft.com/'
const url = 'https://www.praxis-bulkamp.com/myaccount/login/';

const main = async () => {
    const browser = await puppeteer.launch({
        headless: 'new', // Non-headless mode to see the browser GUI

    });
    
    const page =  await browser.newPage()
    await page.goto(url)
    // await page.screenshot({path: 'bot.jpg'})

    await page.type('#email-address', ADMIN_EMAIL)
    await page.type('#password', ADMIN_PASSWORD)
    await page.click('[type=submit]')

    await page.waitForTimeout(15000)

    
    await browser.close()
    console.log('All Done!')
    }

main()