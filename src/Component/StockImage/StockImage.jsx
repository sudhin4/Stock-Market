import image1 from "../StockImage/tata-motors.png";
import { FaArrowDown } from "react-icons/fa";
import "../StockImage/Stcokimage.css";

function StockImage({image,Name,Price,Percentage}) {
  return (
    <>
      <div className="full_stockImage_div">
        <div className="flex_box_div">
          <img src={image} alt="" className="Image_for_branding" />
        </div>
        <div className="content_of_the_company">
          <h3 className="company_name">{Name}</h3>
          <p className="stock_price_of_cmp">
            {Price} <p className="INr___">INR</p>
          </p>
          <p className="today_percentage_of_the_stock">
            {Percentage} <FaArrowDown className="down_arrow_of_the_stock" />
            <p className="today-----">today</p>
          </p>
        </div>
      </div>
    </>
  );
}
export default StockImage;
