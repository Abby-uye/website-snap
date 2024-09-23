import Layout from "../layout/layoutIndex"
import RavenUsers from "../sections/home/ravenUsersSection/ravenUsersIndex"
import SecurityHeroSection from "../sections/securitySection/heroSectionIndex"
import SwiftResponse from "../sections/securitySection/swiftResponseIndex"
import TransactAndsave from "../sections/securitySection/transactAndSaveindex"

const SecurityPage = ()=>{
    return(
        <Layout>
<SecurityHeroSection/>
<TransactAndsave/>
<SwiftResponse/>
<RavenUsers/>
        </Layout>
    )
}
export default SecurityPage