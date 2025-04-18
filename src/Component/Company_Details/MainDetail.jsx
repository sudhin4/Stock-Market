import { useEffect, useState } from "react";
import "../Company_Details/Companydetails.css";

function MainDetailcomponent() {
  const [data, setgetdata] = useState();
  const [getprice, setgetprice] = useState();

  async function getapi() {
    const response = await fetch(
      "https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=cvvu929r01qud9qkmm7gcvvu929r01qud9qkmm80"
    );
    const data = await response.json();
    setgetdata(data);
  }

  async function getshareprice() {
    const response = await fetch(
      "https://finnhub.io/api/v1/quote?symbol=AAPL&token=cvvu929r01qud9qkmm7gcvvu929r01qud9qkmm80"
    );
    const pricedata = await response.json();
    setgetprice(pricedata);
  }

  console.log(data);
  console.log(getprice);
  let image;
  let name;
  let ticker;
  let ipodate;
  let technology;
  let marketcap;
  let shareprice;

  if ((data && getprice)) {
    image = data.logo;
    name = data.name;
    ticker = data.ticker;
    shareprice = getprice.c;
    ipodate = data.ipo;
    marketcap = data.marketCapitalization;
    technology = data.finnhubIndustry;
  }

  useEffect(() => {
    getapi();
    getshareprice();
  }, []);

  return (
    <>
      <div className="MaindataComponent">
        <h1 className="Logo_main_details_heading">Company details</h1>
        <br />
        
        <div className="company_details_div">
          <div className="image_box">
            <img src={image} alt="" className="image_div" />
          </div>
          <div className="name_type_data">
            <h2 className="Name_heading data_maindetails_stringname">{name}</h2>
           <h2 className="ticker_heading data_maindetails">{ticker}</h2>
          </div>
          <div className="ticker">
          <p className="label_ipo_date heading_maindetails">IPO Date</p>
          <h2 className="ipo_data data_maindetails">{ipodate}</h2>
          </div>
          <div className="marketcap__">
            <h2 className="Marketcap_heading heading_maindetails">Market Cap</h2>
            <p className="market_cap_price data_maindetails">${marketcap} <b className="million_heading">M</b></p>
          </div>
          <div className="share_price__">
            <h2 className="sharePrice_detail heading_maindetails">Share Price</h2>
            <p className="sharePrice_price data_maindetails">${shareprice}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainDetailcomponent;
