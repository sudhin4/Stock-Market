import Image from "./Images/Stock.jpg";
import "./index.css";
import { FaArrowRight } from "react-icons/fa";
import tata from "./Images/tata-motors.png";
import hdfc from "./Images/hdfcImage.jpg";
import Adani from "./Images/Adani_2012_logo.png";
import StockImage from "./Component/StockImage/StockImage";

function Home() {
  return (
    <>
      <div className="Home_whole_div">
        <div className="caption_div_home">
          <h2 className="Heading_for_Home_section">
            The Market at Your Fingertips.
          </h2>
          <p1 className="paragraph_for_Home_section">
            "Take control of your financial future with the smartest way to
            track, and grow your investments — all in one powerful app."
          </p1>
        </div>
        <div className="Imag_section">
          <div className="stockIMage_divvv">
            <div className="tataaa">
              <StockImage
                image={tata}
                Name={"TATA MOTORS"}
                Price={617.05}
                Percentage={"−5.15 (0.83%)"}
              />
            </div>
            <div className="adani">
              <StockImage
                image={Adani}
                Name={"Adani Enterprises Ltd"}
                Price={"2,396.40"}
                Percentage={"−22.10 (0.91%)"}
              />
            </div>
          </div>

          <img src={Image} alt="" className="Image_for_home_page" />
        </div>
      </div>
      <div className="Explore_btn_Now-btn">
        <button className="explore_now_btn">
          Explore Now <FaArrowRight className="rigth_arrow_icon" />
        </button>
      </div>
    </>
  );
}
export default Home;
