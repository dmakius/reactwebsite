import react from "react";

class Footer extends react.Component{
    render(){
        const divStyles={
            marginTop:"15px",
            backgroundColor: "#f3f5f8",
            padding:"20px 0 20px"
        }
        const textStyles={
            color:"#000000",
            fontSize:"24px"
        }
        return(
            <div class="row footer" style={divStyles}>
                <div class="col-md-12 text-center">
                    <p style={textStyles}>Powered By HaShem. &copy; 2023</p>
                </div>
            </div>
        );
    }
}

export default Footer;