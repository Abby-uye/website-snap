import { RavenButton } from "@ravenpay/raven-bank-ui";
import { resourceObjects } from "./resourseSection";
import { globalIcons } from "../../../assets/globalIcons";
import "../../../styles/resourceSectionStyle/resourceSectionIndex.css";
import { useEffect, useState } from "react";

const ResourceSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760); // A
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="general-size-wrap">
      <div className="resource-section-container-wrap">
        <div className="resource-section-container-wrap-inner">
          <h6>
            Resources to help you <br />
            grow your finance.
          </h6>
          <RavenButton color="green-light" label="Read More Articles" />
        </div>

        <div className="resource-section-container-wrap-inner-two">
          {resourceObjects
            // .slice(0, isMobile ? 2: resourceObjects.length)
            .map((data, index) => (
              <div key={index} className="inner-two-data">
                <div className="data-image">
                  <img src={data.img} alt="images" />
                </div>

                {data.boldText.split("\n").map((line, lineIndex) => (
                  <p className="data-text-one" key={lineIndex}>
                    {line}
                  </p>
                ))}

                <p className="data-text-two">{data.dateText}</p>
                <div className="button-arrowright-holder">
                  <RavenButton
                    color="white-light"
                    textColor="black-light"
                    label="Read Articles"
                    className="ravenButton"
                  />
                  {/* <div className="img-box">
                <figure>{globalIcons.rightArrow}</figure>
                </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ResourceSection;
