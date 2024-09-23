
import "../../styles//security/heroSection/securityIndexSection.css"
import { securityIcons } from "../../assets/securityAssets/securityIconsIndex";
const SecurityHeroSection = ()=>{
    return(
        <div className="security-hero-section-general-body-wrap">
            <div className="general-size-wrap" >
                <p className="security-p-tag">SECURITY</p>
                <p className="save-invest">Save, Invest and Spend<br/> with Confidence</p>
                <div className="security-hero-double-box-wrap">
                    <div className="security-hero-left">

                    </div>

                    <div className="security-hero-right"> 
                        <p>Your money is safeguarded <br/>
                        with the most secured of <br/> financial institutions</p>
                        <div className="ndic">
                            <figure>{securityIcons.ndic}</figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecurityHeroSection;