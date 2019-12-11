const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')

export default function fetchHTML(url: string){
    const $ = cheerio.load(url)
    jsonframe($)

    const frame = {
        'house': {
            'selector': '.item',
            'data': [{
                'value': '',
                'loacation': '',
                'type': '',
                'size': '',
                'bedroom': '',
                'bathroom': '',
                'parking': ''
            }]
        }
    }

    const estateList = $('.list.items').scrape(frame)
    console.log(estateList)
}