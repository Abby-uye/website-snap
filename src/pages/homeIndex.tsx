import Layout from "../layout/layoutIndex";
import HeroSection from "../sections/home/heroSection/heroIndex";
import MiddleSection from "../sections/home/middleSection/middlesectionIndex";
import OurService from "../sections/home/ourService/ourServiceIndex";
import RavenStatistics from "../sections/home/ravenStatsSection/ravenstatsIndex";
import RavenUsers from "../sections/home/ravenUsersSection/ravenUsersIndex";
import ResourceSection from "../sections/home/resourceSection/resourceSectionIndex";
import TalkWithUs from "../sections/home/talkWithUsSection/talkWithUs";
import VerifiedAccountSection from "../sections/home/verifiedAccountSection/verifiedAccount";


const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <RavenStatistics />
      <MiddleSection />
      <OurService />
      <TalkWithUs />
      <VerifiedAccountSection />
      <RavenUsers />
      <ResourceSection/>
    </Layout>
  );
};
export default Home;
