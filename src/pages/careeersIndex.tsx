import Layout from "../layout/layoutIndex";
import CareersHeroSection from "../sections/careers/heroSection/heroIndex";
import OurRythm from "../sections/careers/ourRythmIndex";
import Perks from "../sections/careers/perksAndRightsIndex";
import RolesToBeFilled from "../sections/careers/rolesToBeFilledIndex";


const CareersPage = () => {
  return (
    <Layout>
      <CareersHeroSection/>
       <OurRythm/>
      <Perks/>
      <RolesToBeFilled/> 
     
    </Layout>
  );
};
export default CareersPage;
