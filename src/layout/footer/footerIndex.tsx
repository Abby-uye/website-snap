import twoPhones from "../../assets/twophones.png";
import { globalIcons } from "../../assets/globalIcons";
import "../../styles/footerStyle/footerIndex.css";
import mobileFooterImage from "../../assets/WhatsApp_Image_2024-09-05_at_15.05.19-removebg-preview.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="raven-website-footer-container-wrap">
      <div className="general-size-wrap">
        <div className="raven-website-footer-main">
          <div className="raven-website-footer-container-wrap-first-div">
            <div className="first-div-inner-div">
              <div className="send-recieve-and-pay">
                <p className="send-recieve-and-pay-p-tag-one">
                  Send, Recieve and Save money with <br /> zero troubles,
                  anyday!, anytime!
                </p>

                <p className="send-recieve-and-pay-p-tag-two">
                  Bank the Raven Way!
                </p>

                <div className="img-box-holder">
                  <div className="img-box-holder-inner">
                    <div className="img-box">
                      <figure>{globalIcons.appleStore}</figure>
                    </div>
                    <div className="img-box">
                      <figure>{globalIcons.googlePlay}</figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="raven-website-footer-container-wrap-first-image">
              <img src={twoPhones} alt="" />
            </div>
            <div className="raven-website-footer-container-wrap-first-image-mobile">
              <img src={mobileFooterImage} alt="" />
            </div>
          </div>

          <div className="raven-website-footer-container-wrap-second-div">
            <div className="second-div-layout">
              <p className="u">PERSONAL</p>
              <p>Savings</p>
              <p>Raven Cards</p>
              <p>Overdrafts</p>
              <p>Finalytics</p>
            </div>

            <div className="second-div-layout">
              <p className="u">FOR BUSINESSES</p>
              <p>Business Banking</p>
              <p>Card Issuing</p>
              <p>Business Loans</p>
              <p>RavenPOS</p>
              <p>Atlas </p>
            </div>

            <div className="second-div-layout">
              <p className="u">COMPANY</p>
              <p  onClick={() => {
                  navigate("/about-us");
                  window.scrollTo(0, 0);
                }}>About Us</p>
              <p
                onClick={() => {
                  navigate("/careers");
                  window.scrollTo(0, 0);
                }}
              >
                Careers
              </p>
              <p
                onClick={() => {
                  navigate("/blog");
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
              >
                Blog
              </p>
              <p  onClick={() => {
                  navigate("/privacy-policy");
                  window.scrollTo(0, 0);
                }}>Privacy Policy</p>
              <p onClick={() => {
                  navigate("/terms-and-conditions");
                  window.scrollTo(0, 0);
                }}>Terms & Conditions</p>
            </div>

            <div className="second-div-layout">
              <p className="u">HELP</p>
              <p>FAQ</p>
              <p
                onClick={() => {
                  navigate("/careers");
                  window.scrollTo(0, 0);
                }}
              >
                Careers
              </p>
              <p>Talk to our Mascot</p>
              <p
                onClick={() => {
                  navigate("/security");
                  window.scrollTo(0, 0);
                }}
              >
                Security
              </p>
            </div>

            <div className="footer-container-icon-hoder-wrapper">
              <div className="img-box">
                <figure>{globalIcons.qrCode}</figure>
              </div>

              <div className="footer-container-icon-hoder-wrapper-inner">
                <div className="img-box">
                  <figure>{globalIcons.facebookIcon}</figure>
                </div>
                <div className="img-box">
                  <figure>{globalIcons.instagram}</figure>
                </div>
                <div className="img-box">
                  <figure>{globalIcons.twitter}</figure>
                </div>
              </div>
            </div>
          </div>

          <div className="raven-website-footer-container-wrap-third-div">
            <p>
              All Deposits Are Insured By The Nigerian Deposit Insurance
              Corporation (NDIC). Raven Bank Is powered by Beststar MFB a
              Licensed MF Bank
              <br /> by the Central Bank Of Nigeria. “Raven” and “RavenBank” are
              trademarks of Ravenpay LTD. Plot 20 Layi Yusuf Crescent, off
              Admiralty way, Lekki Lagos.
            </p>
          </div>
          <div className="raven-website-footer-container-wrap-fourth-div">
            <p>Raven — The People’s Bank of Africa.</p>
            <p>All Rights Reserved — 2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
