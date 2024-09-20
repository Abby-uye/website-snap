import "../../styles/careers/ourRythmAndVibe/ourRythmIndex.css";
import { careerIcons } from "../../assets/careersAssets/careersIconsIndex";
import twoladiesOval from "../../assets/careersAssets/twoladiesoval.png"
import office from "../../assets/careersAssets/office.png"
const OurRythm = () => {
  return (
    <div className="general-size-wrap">
      <div className="our-rythm-general-wrap">
        <div className="our-rythm-general-wrap-div-one">
        <p className="rythm-and-vibe">
        Our <span>Rythm </span>and Vibe!
        </p>
        <p className="every-work-place">
          Every workplace and business have their style <br />
          of work. this is ours...
        </p>
        <div className="rythm-and-vibe-doble-section">
            <div className="rythm-and-vibe-doble-section-inner-section">
                <><figure className="thunder-bolt">{careerIcons.thunderbolt}</figure></>
                <p className="header">We work Fast!</p>
                <p>We are not big on hierachical processes <br/>as we feel complicated processes<br/> can kill drive, creativity and innovation</p>
                <p>We embrace the chaos that comes with <br/>being process-light and we priotize <br/>swiftly to keep the balance.</p>
            </div>
            <div className="our-rythm-general-middle-image">
        <figure className="oval-image">{<img src={twoladiesOval} alt="two women"/>}</figure>
        <figure className="oval-image-two">{<img src={office} alt="office space"/>}</figure>
      </div>
            <div className="rythm-and-vibe-doble-section-inner-section">
                <><figure className="guiter">{careerIcons.guiter}</figure></>
                <p className="header">We play Hard!</p>
                <p >The team is fully dependent<br/> on each of it’s members to build<br/> a great experience.</p>
                <p>Therefore we unwind, have fun <br/>and ensure everyone has the best of <br/>experience to deliver to thier best!</p>
            </div>
        </div>
        <><figure className="raven-black-and-white-logo">{careerIcons.raven}</figure></>
        </div>
      <div className="our-rythm-general-wrap-div-two">
        <figure className="oval-image">{<img src={twoladiesOval} alt="two women"/>}</figure>
        <figure className="oval-image-two">{<img src={office} alt="office space"/>}</figure>
      </div>
      </div>
    </div>
  );
};
export default OurRythm;
