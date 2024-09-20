import bigImage from "../../../assets/middle section big image.png";
import bankWithout from "../../../assets/Bank_Without_Limits_MergedfastestImage (1).png";
import saveUpto from "../../../assets/Save_Up_To_15_Merged 1high-interest.png";
import securedFunds from "../../../assets/Secured_Funds_Payment_MergedtopNotchImage.png";
import group846 from "../../../assets/Group 8465transactionImage.png";
import "../../../styles/middleSectionStyle/middleSectionIndex.css";
import { RavenButton } from "@ravenpay/raven-bank-ui";

const MiddleSection = () => {
  return (
    <div className="general-size-wrap">
    <div className="raven-middle-section-container-wrap">
      <div className="raven-middle-section-container-wrap-all-your-account">
        <div className="raven-middle-section-container-wrap-all-your-account-in">
          <p>
            All Your Other Accounts In <br />
            One Bank, All Services <br />
            Under One Roof.
          </p>
          <div className="your-account-in-inner">
          <p>
          
            We help you to manage your entire personal finance from <br />
            one place. Just sign up,connect all your bank accounts, and <br />
            start managing everything from a single dashboard.
          </p>
          <RavenButton color="green-light" label="Link your Accounts" />
          </div>
         
        </div>
     
      </div>
      <div className="big-middle-image">
        <img src={bigImage} alt="middle section-image"/>
      </div>

      <div className="middlesection-colored-square-boxes">
        <div style={{backgroundColor:"#E8FFF6"}} className="middlesection-colored-square-boxes-inner">
          <p style={{color:"#0B8376"}} className="middlesection-colored-square-boxes-inner-header">
            Super Fast
            <br /> Money Transfers
          </p>
          <p style={{color:"#0B8376"}}>
            Send money in seconds, not hours or days.
            <br /> And it's just a few clicks away.
          </p>
          <div  className="img-box-one">
          <img src={bankWithout} alt="" />
          </div>
        </div>
        <div style={{backgroundColor:"#FFF6ED"}} className="middlesection-colored-square-boxes-inner">
          <p style={{color:"#EA872D"}} className="middlesection-colored-square-boxes-inner-header">
            All-round <br />
            Financial Data
          </p>
          <p>
            Financial insights help you make informed decisions,
            <br /> benchmark goals, analyze your finances.
          </p>
          <div style={{top:"26rem",left:"20.4rem"}}className="img-box" >
          <img src={group846} alt="" />
          </div>
        </div>
        <div style={{backgroundColor:"#F0EEFF"}} className="middlesection-colored-square-boxes-inner">
          <p style={{color:"#755AE2"}}  className="middlesection-colored-square-boxes-inner-header">Top Notch Security</p>
          <p>
            Send money in seconds, not hours or days.
            <br /> And it's just a few clicks away.
          </p>
          <div style={{top:"19.2rem",left:"20rem"}}
           className="img-box">
          <img src={securedFunds} alt="" />
          </div>

        </div>
        <div style={{backgroundColor:"#E9F5FF"}} className="middlesection-colored-square-boxes-inner">
          <p style={{color:"#476885"}}  className="middlesection-colored-square-boxes-inner-header">Sweet Interest Rates</p>
          <p>
            Our accounts offer interest rates that <br />
            are among the highest in our industry.
          </p>
          <div  style={{top:"19.2rem",left:"20rem"}}
          className="img-box">
          <img src={saveUpto} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default MiddleSection;
