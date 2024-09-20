
import "../../../styles/aboutUsStyles/programsAndEventsStyle/programAndEventsIndex.css"
import groupOfPeople from "../../../assets/aboutUsAssets//Frame 8904.png"
import twoLadies from "../../../assets/aboutUsAssets//Frame 8905.png"
const ProgramsandEvents = ()=>{
    return (
        <div className="general-size-wrap">
            <div className="programs-and-events-general-cont-wrap">
<p className="program-p-tag">PROGRAMS & EVENTS</p>
<p className="exciting-events">Exciting events & programmes<br/> we have held so far..</p>
<div className="image-group-slide">
    <div className="img-box">
    <figure> <img src={groupOfPeople} alt="group "/></figure>
    </div>
    <div className="img-box">
    <figure> <img src={twoLadies} alt="two-ladies"/></figure>
    </div>
    <div className="img-box">
        <figure> <img src={groupOfPeople} alt="group "/></figure>
       
    </div>
    <div className="img-box">
        <figure> <img src={twoLadies} alt="two-ladies"/></figure>
       
    </div>
</div>
            </div>
        </div>
    )

    
}


export default ProgramsandEvents