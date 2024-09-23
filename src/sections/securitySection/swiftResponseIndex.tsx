
import "../../styles/security/swiftResponse/swiftResponseIndex.css"
import { securityIcons } from "../../assets/securityAssets/securityIconsIndex";
const SwiftResponse = () => {
  return (
    <div className="swift-response-general-cont-wrap">
      <div className="general-size-wrap">
        <div className="swift-response-double-div-wrap-container">
          <div className="swift-response-double-div-left"></div>
          <div className="swift-response-double-div-right">
            <p className="swift-response-p-tag"> 
            Swift response from the support <br/>team to resolve any problems you could <br/> be facing with the Raven platform.
              
            </p>
            
              
            <p >   <><figure className="security-image-box">{securityIcons.phone}</figure></>Call: +2348066701121</p>
                
            
            <p >   <><figure className="security-image-box">{securityIcons.message}</figure></>Mail: support@getraven.com</p>

            <p >  <><figure className="security-image-box">{securityIcons.ravenWing}</figure></>Talk to the Mascot</p>
                
                
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwiftResponse;
