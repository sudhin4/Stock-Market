import { useState } from "react";
import MainDetailcomponent from "./MainDetail";
import StockPrice from "./StockPrice";

function CompanyDetails() {
 

  return <>
    <div>
      <MainDetailcomponent/>
      <h3 className="Logo_main_details_heading">Share Details</h3>
      <StockPrice/>
    </div>
  </>
  
}
export default CompanyDetails;
