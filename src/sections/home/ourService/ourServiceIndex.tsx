import { ourServiceObjs } from "./ourService"
import "../../../styles/ourServiceStyle//ourServiceIndex.css"
import { useState } from "react";
const OurService = ()=>{





    return(
      <div className="general-size-wrap">
<div className="raven-website-our-service-container-wrap">
    <p className="raven-website-our-service-container-wrap-our-service-p-tag">OUR SERVICES</p>
    <p className="no-need">No need to visit your branch.<br/> All services are at your fingertips.</p>
    <p className="we-use-the">We use the Latest High Powered Technology to provide and secure Innovative new banking, but in all, <br/>we stand for Convenience, Affordability, and Reliability.</p>

    <div className="raven-website-our-service-container-wrap-grid-layout-wrap">
      {ourServiceObjs.map((service, index) => (
        <div key={index} className="service-box-wrap"
        >
         <div className="img-box"><figure>{service.boardIcon}</figure></div>
          <h6 className="service-box-title">{service.title}</h6>
          
            {service.body.split('\n').map((line, lineIndex) => (
              <p className="service-box-body"key={lineIndex}>{line}</p>
            ))}
         
        </div>
      ))}
    </div>
</div>
</div>
    )
};
export default OurService