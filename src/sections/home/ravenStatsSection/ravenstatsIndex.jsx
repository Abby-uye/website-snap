import { heroIcons } from "../../../assets/heroIcons";
import "../../../styles//ravenStatsSectionStyle/ravenStatsIndex.css";
const RavenStatistics = () => {
  return (
    <div className="general-size-wrap">
      <div className="raven-website-staistics-section-wrap">
        <p className="mind-blowing">
          Mindblowing <br />
          Metrics
        </p>
        <div className="raven-website-staistics-section-wrap-inner">
          <div className="img-box">
            <figure>{heroIcons.usersIcon}</figure>
          </div>
          <p style={{ color: "#014345" }}>
            400K+ <span style={{ color: "#0B8376" }}>CUSTOMERS</span>
          </p>
        </div>
        <div className="raven-website-staistics-section-wrap-inner">
          <div className="img-box">
            <figure>{heroIcons.thbusinessesIcon}</figure>
          </div>
          <p style={{ color: "#014345" }}>
            200+ <span style={{ color: "#755AE2" }}>BUSINESSES</span>
          </p>
        </div>
        <div className="raven-website-staistics-section-wrap-inner">
          <div className="img-box">
            <figure>{heroIcons.thunderBoltIcon}</figure>
          </div>
          <p style={{ color: "#014345" }}>
            100K+<span style={{ color: "#EA872D" }}>TRANSACTIONS</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RavenStatistics;
