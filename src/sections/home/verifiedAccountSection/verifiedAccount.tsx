import { RavenButton } from "@ravenpay/raven-bank-ui";
import { globalIcons } from "../../../assets/globalIcons";
import componentImage from "../../../assets/groupComponen.png";
import "../../../styles/verifyAccountStyle/verifyAccountIndex.css";

const VerifiedAccountSection = () => {
  return (
    <div className="verified-account-container-wrapper-div">
      <div className="verified-account-container-wrapper-div-inner">
        <p className="for-business-p-tag">FOR BUSINESSES</p>
        <p className="for-business-second-p-tag">Get verified accounts for</p>
        <p className="for-business-third-p-tag">
          your <span>Business</span>
        </p>

        <p className="get-verified-coporate">
          Get verified corporate accounts and have the ability
          <span> to pay with raven anytime, anyday!.</span>
        </p>
        <div className="get-verified-button-holders">
          <RavenButton
            color="white-light"
            label="Create Business Account"
            textColor="black-dark"
          />
          <div className="get-verified-button-holders-inner">
            <RavenButton color="black-light" label="Learn More" />
            <div className="img-box">
              <figure>{globalIcons.rightArrow}</figure>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-image">
        <img src={componentImage} alt="componernt group " />
      </div>
    </div>
  );
};
export default VerifiedAccountSection;
