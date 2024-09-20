
import "../../styles/careers/rolesToBeFilled/rolesToBeFilledIndex.css"
import { navbarIcons } from "../../assets/layoutAssets/navbarIcons"
const RolesToBeFilled = ()=>{

    const rolesData = [
        {
            role:"Jnr. Product Designer ",
            location:"Remote /  Anywhere",
            apply:"Apply for this"
            
        },
        {
            role:"Video Director",
            location:"Onsite / Lekki",
            apply:"Apply for this"
            
        },
        {
            role:"Design Manager",
            location:"Onsite / Lekki",
            apply:"Apply for this"
            
        },
        {
            role:"Snr. Product Designer",
            location:"Onsite / Lekki",
            apply:"Apply for this"
            
        },
        {
            role:"3D Artist",
            location:"Remote /  Anywhere",
            apply:"Apply for this"
            
        },
        
    
    ]
    return(
        <div className="general-size-wrap">
            <div className="open-roles-container-wrap">
                <p className="open-roles-wrap">OPEN ROLES</p>
                <p className="roles-to-be-tag">Roles to be filled in <span>Raven!</span></p>
                <div className="available-roles-general-wrapper">
                    <p>Creative</p>
                    <p>Development</p>
                    <p>Marketing</p>
                    <p>Communications</p>
                    <p>Finance</p>
                    <p>Customer Service</p>
                    <p>Fraud & Security</p>
                   
                    
                </div>
                <p className="creative-p-tag">Creatives</p>

                <div className="job-roles-layout">
                    {rolesData?.map((role,index)=>(
                        <div key={index}className="job-roles-layout-data">
                            <p>{role.role}</p>
                            <div className="role-location">
                            <p>{role.location}</p>
                           
                            </div>
                           
                           
                            <div className="apply-now-and-arrow">
                                
                                <p className="apply-now">{role.apply}</p>
                                <div>
                                    <figure>{navbarIcons.arowUp}</figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="job-roles-layout-mobile">
                    {rolesData?.map((role,index)=>(
                        <div key={index}className="job-roles-layout-data-mobile">

                            <div className="role-and-location-mobile">
                            <p className="role">{role.role}</p>
                            <div className="role-location">
                            <p>{role.location}</p>
                           
                            </div>

                           
                            </div>
                           
                            <div>
                                    <figure>{navbarIcons.arowUp}</figure>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RolesToBeFilled;