import React, { MouseEvent } from 'react'
import fetchAPI from '../helpers/fetchAPI'
import fetchHTML from '../helpers/fetchHTML'
import stocksData from '../helpers/stockCompanies'

export default function home() {
    return (
        <div id='mainPage'>
            <h1>market tracker</h1>
            <button onClick={(event: MouseEvent) => {
                    fetchHTML('https://www.realestate.com.au/buy/in-brisbane+-+greater+region,+qld/list-1')
                    /*STOCK MARKET
                    stocksData('code')
                    .then((res) => {
                        const compCodes: any = res
                        compCodes.forEach((code: string) => {
                            fetchAPI(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${code}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_KEY}`)
                        })
                    })
                    */
                }
            }>fetch</button>
        </div>
    )
}