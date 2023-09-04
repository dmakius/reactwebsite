import react from 'react';

class Project extends react.Component{
  render(){
    return(
          <div class="col-md-4" style={{marginTop: "25px;"}}>
            <div class="card card-height" >
              <img src={this.props.img} class="card-img-top card-img-height" style={{height:"250px"}} alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>

                <div class="row">
                  <button class="btn btn-info" style={{width: "47%", marginBottom:"10px" , marginRight:"5px"}}>ABOUT</button>
                  <a href={this.props.codeURL}  target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style={{width: "47%", marginBottom:"10px", marginLeft:"5px"}}>CODE</a>
                </div>
                <div class="row">
                  <p class="card-text" style={{display:"none"}}>{this.props.about}</p>
                  <a  target="_blank"  rel="noopener noreferrer" href={this.props.url} class="btn btn-primary" style={{width: "100%"}}>PLAY</a>
                </div>
              </div>
            </div>
          </div>
    );
  
  }  
}

export default Project;