import myimg from '../../assets/MEIMG.jpg'

function Team() {
    return ( <div className="container">
        <div className="row"><h3>People</h3></div>
        <div className="row border-bottom">
            <div className="col">
                <img src={myimg} style={{width:"70%",height:"60%",borderRadius:"100%"}}/>
            </div>
            <div className="col">
               <div>
               <h3>Hey , I am Diksha Sisodia</h3>
               <p>I am currently persuing BTECH in Computer science</p>
               <p>from ABES ENGINEERING COLLEGE,GHAZIABAD</p>
               <p>I am a  coding enthusiast engaged in devoloping creative webpages</p>
               <p>Also love to play Sports in my free time</p>
            
               </div>
            </div>
        </div>
    </div> );
}

export default Team;