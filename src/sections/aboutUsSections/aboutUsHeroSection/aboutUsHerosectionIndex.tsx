import peopleGroup from "../../../assets/Frame 8512.png";
import { aboutUsIcons } from "../../../assets/aboutUsAssets/aboutUsIconsIndex";
import groupMobile from "../../../assets/aboutUsAssets/groupMobile.jpeg";
import "../../../styles/aboutUsStyles/aboutUsHeroSection/aboutUsIndex.css";

const AboutUsHeroSection = () => {
  return (
    <div className="about-us-hero-section-wrapper-container">
    <div className="general-size-wrap">
      
        <p className="about-us-p-tag">About Us</p>
        <p className="young-swift-cont">
          We are <span>Young, Swift,</span>and
        </p>
        <p className="young-swift-cont-mobile">
          We are <span>Young, Swift, and</span>
        </p>
        <p className="just-right-for-you">just right for you!</p>
        

        <p className="here-are-raven-bank">
          Here are Raven bank, we are built to help you improve your financial
          life <br />
          from ease of transfer to payment of bills and more...
        </p>
        <img className="group-photo" src={peopleGroup} alt="grouped-people" />
        <div className="group-photo-mobile">
  <figure><img src= {groupMobile} alt="groupimage"/></figure>
</div>

        
        <p className="backed-by-big-bigboy">
          BACKED BY THE BIGBOYS IN THE INDUSTRY
        </p>

        <div className="company-list">
          <div className="img-box">
            <figure>{aboutUsIcons.forbes}</figure>
          </div>
          <div className="img-box">
            <figure>{aboutUsIcons.google}</figure>
          </div>
          <div className="img-box">
            <figure>{aboutUsIcons.atlasian}</figure>
          </div>
          <div className="img-box">
            <figure>{aboutUsIcons.microsoft}</figure>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default AboutUsHeroSection;
