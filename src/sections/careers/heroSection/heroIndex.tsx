import { RavenButton } from "@ravenpay/raven-bank-ui";
import "../../../styles/careers/heroSection/heroSectionIndex.css"

const CareersHeroSection = () => {
  return (
    <div className="careers-hero-section-general-wrap">
      <div className="general-size-wrap">
        {/* left start */}
        <div className="careers-hero-section-left">
          <p className="careers-p-tag">CAREERS</p>
          <p className="join-the-team">Join the Team at Raven</p>
          <p className="no-egos-here">
            No egos here. Just a bunch of talented people putting in the work to{" "}
            <br />
            ensure you have the best experience with Raven!
          </p>
          <div className="raven-button-career">
            <RavenButton color="green-light" label="View Open Roles" />
          </div>

          <div className="career-image-holder-mobile">
            <div className=" box-mobile box-left-mobile">
            <div className="top-box"></div>
            <div className="bottom-box"></div>
            </div>

             <div className=" box-mobile box-middle-mobile">
            <div className="top-box"></div>
            <div className="bottom-box"></div>
            </div>


            <div className=" box-mobile box-right-mobile">
            <div className="top-box"></div>
            <div className="bottom-box"></div>
            </div>

          </div>

          <div className="hanging-job-roles">
            <div className="hanging-job-roles-roles-one">
              <div className="available-job-role-contents">
                <p className="available-job-role">Product Designer</p>
                <p className="available-job-location">Remote — Anywhere</p>
              </div>
              <div className="available-job-role-contents">
                <p className="job-status">OPEN</p>
                <p className="job-company">RAVEN</p>
              </div>
            </div>
            <div className="hanging-job-roles-roles-two">
              <div className="available-job-role-contents">
                <p className="available-job-role">DevOps</p>
                <p className="available-job-location">Remote — Anywhere</p>
              </div>
              <div className="available-job-role-contents">
                <p className="job-status">OPEN</p>
                <p className="job-company">RAVEN</p>
              </div>
            </div>
            <div className="hanging-job-roles-roles-three">
              <div className="available-job-role-contents">
                <p className="available-job-role">Frontend Engineer</p>
                <p className="available-job-location">Remote — Anywhere</p>
              </div>
              <div className="available-job-role-contents">
                <p className="job-status">OPEN</p>
                <p className="job-company">RAVEN</p>
              </div>
            </div>
          </div>
        </div>
        {/* left end */}
        {/* right start */}
        <div className="careers-hero-section-right">
          <div className="box box-top">
            <div className="middle-box"></div>
            <div className="bottom-box"></div>
          </div>

          <div className="box box-right">
            {/* <div className="top-box"></div> */}
            <div className="bottom-box"></div>
          </div>

          <div className="box box-bottom">
            <div className="top-box"></div>
            <div className="bottom-box"></div>
          </div>

          <div className="box box-left">
            <div className="top-box"></div>
            <div className="bottom-box"></div>
          </div>
        </div>
        {/* right end */}
      </div>
    </div>
  );
};
export default CareersHeroSection;
