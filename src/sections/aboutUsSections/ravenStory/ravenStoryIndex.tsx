import bigScreen from "../../../assets/aboutUsAssets/Group 8384.png";
import bigScreenMobile from "../../../assets/aboutUsAssets/Mask Group.png";
import smallScreen from "../../../assets/aboutUsAssets/iPhone (2).png";
import { globalIcons } from "../../../assets/globalIcons";
import "../../../styles/aboutUsStyles/ravanStorystyle/ravenStoryIndex.css";
const RavenStorySection = () => {
  return (
    <div className="general-size-wrap">
      <div className="raven-story-general-wrapper-holder">
        <p className="raven-story-box">RAVEN — THE STORY</p>
        <p className="why-we-built">
          Why we built <span>Raven!</span>
        </p>
        <p className="here-at-raven-story">
          Here at raven bank, we are built to help you improve your financial
          life, from ease of <br />
          transfers to, bill payment and more.Here at raven bank, we are built
          to help you improve <br />
          your financial life, from ease of transfers to, bill payment and more.
        </p>

        <div className="raven-story-image-container">
          <div className="big-screen-wrapper">
            <img src={bigScreen} alt="big screen" />
          </div>
          <div className="big-screen-wrapper-mobile">
            <img src={bigScreenMobile} alt="big screen" />
          </div>

          <div className="small-screen-wrapper">
            <img src={smallScreen} alt="small screen" />
          </div>
        </div>
        <div className="get-started-with-web-cont">
          <p>Get Started with the Web</p>
        </div>
        <div className="img-box-contaoiner">
          <div className="img-box">
            <figure>{globalIcons.googlePlay}</figure>
          </div>{" "}
          <div className="img-box">
            <figure>{globalIcons.appleStore}</figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RavenStorySection;
