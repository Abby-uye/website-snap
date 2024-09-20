/* eslint-disable no-lone-blocks */
import Layout from "../layout/layoutIndex";
import AboutUsHeroSection from "../sections/aboutUsSections/aboutUsHeroSection/aboutUsHerosectionIndex";
import CoreValueSection from "../sections/aboutUsSections/coreValuesSection/coreValueIndex";
import OurMissionSection from "../sections/aboutUsSections/ourMissionSection/ourMissionIndex";
import OurVisionSection from "../sections/aboutUsSections/ourVisionSection/ourVisionIndex";
import ProgramsandEvents from "../sections/aboutUsSections/programAndEvents/programsAndEventsIndex";
import RavenStorySection from "../sections/aboutUsSections/ravenStory/ravenStoryIndex";

const AboutUsHomePage = () => {
  return (
    <Layout>
      <AboutUsHeroSection />
      <RavenStorySection />
      <CoreValueSection />
      <OurVisionSection />
      <OurMissionSection />
      <ProgramsandEvents />
    </Layout>
  );
};
export default AboutUsHomePage;


{/* <>
      <Layout>
        <div className="about-us-page-index-wrapper">
          <AboutUsHeroSection />
          <RavenStorySection />
          <CoreValueSection />
          <OurVisionSection />
          <OurMissionSection />
          <ProgramsandEvents />
        </div>
      </Layout>
    </> */}