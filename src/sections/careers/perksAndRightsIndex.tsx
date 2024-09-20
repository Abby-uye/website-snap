import "../../styles/careers/perksAndRights/perksAndRightsIndex.css"
import { careerIcons } from "../../assets/careersAssets/careersIconsIndex"

const Perks = ()=>{

const perksData = [
    {
        icon:careerIcons.competitive,
        text:"Competitive Salaries and Bonuses"
    },
    {
        icon:careerIcons.annual,
        text:"Annual leaves and Holidays"
    },
    {
        icon:careerIcons.health,
        text:"Health Insurance and 401K benefits"
    },
    {
        icon:careerIcons.career,
        text:"Career and Mindset Growth"
    },
    {
        icon:careerIcons.remote,
        text:"Remote and friendlywork culture"
    },

]
    return(
        <div className="general-size-wrap">
            <div className="perks-and-rights-general-wrapper">
                <p className="perks-ptag">PERKS AND RIGHTS</p>
                <p className="perks-of-joining">Perks of Joining the <br/>Team at Raven</p>
                <div className="perks-and-rights-flex-container">
                    {perksData?.map((data,index)=>(
                        <div key={index}
                        className="perks-and-rights-innerCont">
                            <div className="perks-and-rights-data-icon">
                                <figure>{data.icon}</figure>
                            </div>
                            <p className="perks-and-rights-text">{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Perks;