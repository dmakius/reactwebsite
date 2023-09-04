import react from "react";
// import Animate from 'animate.css-react'

class Jumbotron extends react.Component{
    constructor(){
        super();
        this.state = {
            currentText:"Software Dev",
            counter:0
        };
         
    }

   

    
    componentDidMount(){
        let array = ["Software Dev", "UX Designer","Game Dev"],
            intervalDurationMs = 3000,
            currentIndex = 0,
            maxNumTimes = -1,
            numTimesRan = 0;
            
        let interval = setInterval(function() {
            if (maxNumTimes !== 0) {
                this.setState({
                    currentText: array[currentIndex]
                });
                currentIndex++;
                if (currentIndex > array.length-1) {
                    if (maxNumTimes === -1) {
                        currentIndex = 0;
                    } else {
                        numTimesRan++;
                        if (numTimesRan === maxNumTimes) {
                            clearInterval(interval);
                        } else {
                            currentIndex = 0;
                        }
                    }
                }
            } else {
                clearInterval(interval);
            }
        }.bind(this), intervalDurationMs);
    }

   
    render(){
      
        const  h1Style= {
            fontSize: "100px",
            letterSpacing: "-8px",
            margin: "0",
            fontWeight: "600",
            lineHeight: "95px",
            textTransform: "uppercase"
        }

        const rotatingStyles={
            fontSize:"20px",
            color:"#4360e0",
            letterSpacing:"18px",
            lineHeight:"50px",
            textTransform:"uppercase"
        }

        const aboutMeStyles={
           padding: "30px 20px 50px 20px",
           backgroundColor:"#4387e0"
        }

        const aboutMeTextStyle={color:"#314ba8", fontSize: "26px", textTransform:"uppercase" , letterSpacing: "4px", fontWeight:"bold"}

        return (
        <div>
            <div className="row" style={{marginTop: "0px"}}>
                <div className="col-md-12" style={{background: "url('assets/backgroundPic.jpg') right bottom no-repeat",
                 backgroundSize: "contain", padding:"110px 0 100px 0", height:"auto",
                    backgroundColor: "#EDECE7"}}>
                    <h1 className="animated fadeInDown" style ={h1Style}>
                        <span style={{opacity:"0.5"}}><span style={{color:"#4365e0", opacity:"0.5"}}>Dani</span>el<br/></span>
                        <span style={{opacity:"0.5"}}>Mak<span style={{color:"#00ccff"}}>over</span></span>
                    </h1>
                    <h3 className="animated fadeInUp delay-05s" style={{opacity:"0.5", marginLeft:"10px"}}>
                        <div style ={rotatingStyles}>{this.state.currentText}</div>
                    </h3>
                </div>       
            </div>

            <div className="row" id="about">
                <div className="container intro text-center section-padding color-bg" id="about" style={aboutMeStyles}>
                <div className="col-md-12">
                    <h1 className="arrow"><span style={aboutMeTextStyle}>about me</span></h1>
                    <p style={{color:"white"}}>
                    I am a Software developer based in Boston. I have over 5 years of professional experience and a Masters Degree in Computer Science.
                    I enjoy building full stack applications for both Mobile and Web platforms. I have also built a number of 2D video games in Javascript. 
                    When I am not coding on a project I am painting, sketching, traveling, and taking care of stray cats.
                    </p>
                    </div>
                </div>
            </div>
        </div>
   
        );
    }
}

export default Jumbotron;