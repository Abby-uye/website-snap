import { globalIcons } from "../../../assets/globalIcons";
import { ajogidata } from "./ravenUsers";
import "../../../styles//ravenUsersStyle//ravenUser.css";
const RavenUsers = () => {
  return (
    <div className="general-size-wrap">
      <div className="raven-users-container-holder">
        <div className="raven-users-container-holder-first-inner">
          <div className="raven-users-container-holder-first-inner-mobile">
            <p className="first-inner-p">CUSTOMER STORIES</p>
            <p className="second-inner-p">
              Over 500K users are
              <br /> proud to use Business Banking
            </p>
            <p className="third-inner-p">Here is what a few have to say...</p>
          </div>

          <div className="div-inner">
            <h6 className="first-inner-p">
              Over 500K people use Raven <br />
              for their daily Transactions
            </h6>
            <p className="second-inner-p">
              Here’s what a few of them have to say...
            </p>
          </div>
          <div className="arrow-holder-div">
            <div className="img-box">
              <figure>{globalIcons.arrowLeftLigt}</figure>
            </div>
            <div className="img-box">
              <figure>{globalIcons.arrowRightLight}</figure>
            </div>
          </div>
        </div>
        <div className="ajogi-data">
          {ajogidata.map((data, index) => (
            <div key={index} className="ajogi-data-inner">
              <div>
                <figure>{data.playIcon}</figure>
              </div>
              <h3 className="ajogi-data-name">{data.name}</h3>

              {data.body1.split("\n").map((line, lineIndex) => (
                <p className="the-data" key={lineIndex}>
                  {line}
                </p>
              ))}

              {data.body2.split("\n").map((line, lineIndex) => (
                <p className="the-data" key={lineIndex}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RavenUsers;
