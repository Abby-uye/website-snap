
import "../../styles/termsAndCondition/termsAndConditionHero//termsAndConditionHeroIndex.css"
import { globalIcons } from "../../assets/globalIcons";
const TermsAndConditionHero = ()=>{
    return(
        <div className="terms-and-condition-general-wrap-container">
<div className="general-size-wrap">
<p className="t-and-c-p-tag">T&Cs</p>
<p className="terms-and-conditions-header">Terms & Conditions</p>
<p className="kindly-read-policy">Kindly read through our Terms and Conditions to get <br/> aquainted with our culture, rules and guides.</p>
<>
<figure className="img-bo">{globalIcons.ravenGreen}</figure>
</>
</div>
        </div>
    )
}
export default TermsAndConditionHero