import Layout from "../layout/layoutIndex"
import PrivacyPolycyHero from "../sections/privacyPolicy/privacyHeroSectionIndex"
import PrivacyPolicyBody from "../sections/privacyPolicy/privacyPolicyBodyIndex"

const PrivacyPolicyPage = ()=>{
    return(
        <Layout>
            <PrivacyPolycyHero/>
            <PrivacyPolicyBody/>
        </Layout>
    )
}
export default PrivacyPolicyPage