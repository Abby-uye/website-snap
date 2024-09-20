import "../../../styles/heroSectionStyle/heroSectionIndex.css";

import standingman from "../../../assets/standingMan.png";
import standingladies from "../../../assets/smillingLadies.png";
import standinglady from "../../../assets/smillingLady.png";
import smilingWoman from "../../../assets/smilingWoman.png";
const HeroSection = () => {
  return (
    <div className="raven-website-herosection-container-wrap">
    <div className="general-size-wrap">
   
      <div className="raven-website-herosection-container-wrap-middle-cont">
        <p className="container-wrap-middle-cont-bold-text">
          Digital Banking for <span>Africans.</span>
        </p>
        <p>
          Enjoy banking with us, your interest <br /> 
        </p>
        <p
        >is our only interest!</p>
      </div>
      <div className="container-wrap-middle-cont-image-section">
        <div className="img-box">
          <img src={smilingWoman} alt="smilling woman" />
        </div>
        <div className="img-ladies">
          <img src={standingladies} alt="humanphoto" />
        </div>
        <div className="img-lady">
          <img src={standinglady} alt="humanphoto" />
        </div>
        <div className="img-man">
          <img src={standingman} alt="humanphoto" />
        </div>
      </div>
     
    </div>
    </div>
    
  );
};
export default HeroSection;
