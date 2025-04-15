import Image from './Images/Stock.jpg'
import './index.css'

function Home() {
  return (
    <>
      <div className="Home_whole_div">
        <h1 className="Heading_for_Home_section">
          "Take control of your financial future with the smartest way to track,
            and grow your investments — all in one powerful app."
        </h1>
        <img src={Image} alt="" className='Image_for_home_page' />
      </div>
    </>
  );
}
export default Home;
