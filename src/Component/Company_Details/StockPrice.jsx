import { useState } from 'react';
import '../Company_Details/Companydetails.css'


function StockPrice(){

    const [shareprice,setshareprice] = useState();

    async function getshareprice(){
        const response = await fetch("https://finnhub.io/api/v1/quote?symbol=AAPL&token=cvvu929r01qud9qkmm7gcvvu929r01qud9qkmm80")
        const data = await response.json();
        setshareprice(data)
    }

    if(shareprice){
        let prevclose = shareprice.pc;
        let prevopen = shareprice.o;
        let high = shareprice.h;
        let volume = shareprice.h;
        let returnrate = shareprice;
    }



    return (
        <>
        <div className="stockprice_component">
            <div className="stock_close_rate">
                <h2 className="prev_close_heading heading_stockPrice">Prev Close</h2>
                <p className="prev_close_price price_value___">${prevclose}</p>
            </div>
            <div className="stock_open_rate">
                <h2 className="prev_open_rate_heading heading_stockprice">Prev open</h2>
                <p className="prev_open_price price_value___">${prevopen}</p>
            </div>
            <div className="stock_high_rate">
                <h2 className="prev_high_rate_heading heading_stockprice">High</h2>
                <p className="prev_high_price price_value___">${high}</p>
            </div>
            <div className="stock_volume_rate">
                <h2 className="prev_volume_rate heading_stockprice">Volume</h2>
                <p className="prev_volume_price price_value___">${volume}</p>
            </div>
            <div className="stock_return_rate">
                <h2 className="return_rate_price heading_stockprice">Return Rate</h2>
                <p className="prev_returnrate_price price_value___">{returnrate}%</p>
            </div>
        </div>
        </>
    )
}

export default StockPrice;