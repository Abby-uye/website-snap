import { RavenButton } from "@ravenpay/raven-bank-ui";
import rejoice1 from "../../../assets/Chat_With_Rejoice2 1.png";
import rejoice2 from "../../../assets/Chat_With_Rejoice2 2.png";
import rejoice3 from "../../../assets/Chat_With_Rejoice2 2 2.png";

import "../../../styles/talkWithUsSections/talkWithUsIndex.css";
const TalkWithUs = () => {
  return (
   
    <div className="raven-website-talk-with-us-container-wrap">
      <div className="raven-website-talk-with-us-container-wrap-image">
        <img className="left-img" src={rejoice1} alt="rejoice" />
      </div>
      <div className="talk-with-us-muddle-wrap">
        <p className="talk-with-us">TALK WITH US</p>
        <p className="avialable-to-help-you"> 
          We are always ready and <span>available to help you!.</span>
        </p>
        <RavenButton color="purple-light" label="Start a Chat with Us" />
      </div>
      <div className="raven-website-talk-with-us-container-wrap-image3">
        <img src={rejoice3} alt="rejoice" />
      </div>
      <div className="raven-website-talk-with-us-container-wrap-image">
        <img className="right-image" src={rejoice2} alt="rejoice" />
      </div>
    </div>
   
  );
};
export default TalkWithUs;
