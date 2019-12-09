import React, { MouseEvent } from 'react'
import fetch from '../helpers/fetchData'
import stocks from '../helpers/stockCompanies'

export default function home() {
    return (
        <div id='mainPage'>
            <h1>market tracker</h1>
            <button onClick={(event: MouseEvent) => {
                    stocks('code')
                    .then((res) => {
                        const compCodes: any = res
                        compCodes.forEach((code: string) => {
                            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${code}&interval=5min&apikey=${process.env.REACT_APP_ALPHA_KEY}`)
                        })
                    })
                }
            }>fetch</button>
        </div>
    )
}