import { aboutUsIcons } from "../../../assets/aboutUsAssets/aboutUsIconsIndex";
import "../../../styles/aboutUsStyles/coreValuesStyle/coreValuesindex.css";
const CoreValueSection = () => {
  return (
    <div className="general-size-wrap">
      <div className="core-values-section-container-wrap">
        <p className="core-values-p">CORE VALUES</p>
        <p className="core-values-values-that">
          Values that bind us all as <br /> an organization.
        </p>

        <div className="core-values-section-container-wrap-values">
          <div>
            <div className="img-box">
              <figure>{aboutUsIcons.honesty}</figure>
            </div>
            <p className="core-values-header">Honesty</p>
            <p className="core-values-body">
              Yoable is a non-profit organization set on <br />
              empowering, inspiring.
            </p>
          </div>

          <div>
            <div className="img-box">
              <figure>{aboutUsIcons.agility}</figure>
            </div>
            <p className="core-values-header">Agility</p>
            <p className="core-values-body">
              Yoable is a non-profit organization set on <br />
              empowering, inspiring.
            </p>
          </div>

          <div>
            <div className="img-box">
              <figure>{aboutUsIcons.resillience}</figure>
            </div>
            <p className="core-values-header">Resillence</p>
            <p className="core-values-body">
              Yoable is a non-profit organization set on <br />
              empowering, inspiring.
            </p>
          </div>

          <div>
            <div className="img-box">
              <figure>{aboutUsIcons.dilligence}</figure>
            </div>
            <p className="core-values-header">Diligence</p>
            <p className="core-values-body">
              Yoable is a non-profit organization set on <br />
              empowering, inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreValueSection;
