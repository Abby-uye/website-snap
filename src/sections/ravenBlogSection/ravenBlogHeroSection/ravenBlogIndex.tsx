import { RavenButton } from "@ravenpay/raven-bank-ui";
import "../../../styles/ravenBlogStyle/ravenBlogHeroSection/ravenBlogHeroSectionIndex.css";
import { blogObjects } from "./ravanBlogSection";

const RavenBlogHeroSection = () => {
  return (
    <div className="general-size-wrap">
      <div className="raven-blog-hero-section-general-wrapper">
        <p className="blog-and-article-p">BLOG & ARTICLES</p>
        <p className="blog-raven-resources">Raven Resources</p>
        <div className="blogs-wrapper-container">
          <p>All Resources</p>
          <p>Finance</p>
          <p>Fraud</p>
          <p>Investment</p>
          <p>Growth</p>
          <p>Savings</p>
        </div>
        <div className="raven-blog-image-header-body">
          {blogObjects.map((data, index) => (
            <div key={index}>
              <div className="blog-data-image">
                <img src={data.img} alt="images" />
              </div>
              <p className="data-text-two">{data.dateText}</p>
              {data.boldText.split("\n").map((line, lineIndex) => (
                  <p className="data-text-one" key={lineIndex}>
                    {line}
                  </p>
                ))}

               
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

        <div className="raven-blog-image-header-body-mobile">
          {blogObjects.slice(0,6).map((data, index) => (
            <div key={index}>
              <div className="blog-data-image">
                <img src={data.img} alt="images" />
              </div>
              <p className="data-text-two">{data.dateText}</p>
              {data.boldText.split("\n").map((line, lineIndex) => (
                  <p className="data-text-one" key={lineIndex}>
                    {line}
                  </p>
                ))}

               
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
        <p className="blog-load-more">Load More...</p>
      </div>
    </div>
  );
};

export default RavenBlogHeroSection;
