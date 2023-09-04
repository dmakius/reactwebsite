import react from "react";
import Project from "./Project";

class ProjectBoard extends react.Component{
    constructor(){
        super();
        this.state = {
            projects:[
                {
                    key:1,
                    title:"My Tabata App",
                    image:"assets/img/tabata.png",
                    about:"Semester Project for Mobile Application Development Course. Acted as Project Manger and Head Engineer. Built natively in Java for Android Phones.",
                    url:"https://github.com/dmakius/MyTabadaApp"
                },
                 {
                    key:2,
                    title:"KnowItAll",
                    image:"assets/img/KnowItAll.png",
                    about:"Semester Project for Software Engineering Course. Acted as Project Manger and Head Engineer. Built in Python, Flask, SQLPostGres",
                    codeURL:"https://github.com/dmakius/KnowItAll-cs673",
                    url:"https://knowitall-cs673.onrender.com/"
                },
                {
                     key:3,
                     title:"Asteroids",
                    image:"assets/img/Asteroids.png",
                    about:"2D shooter sidescroller game built in JavaScript, PhaserJS, NodeJS, and MongoDB",
                    codeURL:"https://github.com/dmakius/asteroids",
                    url:"https://dmakius-games.azurewebsites.net/asteroids"
                }, 
                {
                     key:4,
                     title:"Vertical Mario",
                    image:"assets/img/VerticalMario.png",
                    about:"2D endless jumping game with everyone's favorite plumer. Built in JavaScript, PhaserJS, NodeJS, and MongoDB",
                    codeURL:"https://github.com/dmakius/verticalMario",
                    url:"https://dmakius-games.azurewebsites.net/mario"
                },
                {
                     key:5,
                     title:"MegaMan Runner",
                    image:"assets/img/mmrunner.png",
                    about:"2D endless running game with everyone's favorite Blue Bomber. Built in JavaScript, PhaserJS, NodeJS, and MongoDB",
                    codeURL:"https://github.com/dmakius/MegaManRunner",
                    url:"https://dmakius-games.azurewebsites.net/megaman"
                }
            ]
           
        };
    }

    render(){
        const arrowClass={
                fontSize: "26px",
                textFransform:"uppercase",
                color:"#353535",
                letterSpacing: "4px",
                background:"url('/assets/img/h1-bg.png') no-repeat center bottom",
                fontWeight: "bold",
                
        }

        return(
            <div class="container intro text-center section-padding">
                <div class="row" id ="Projects">
                    <h1 style={arrowClass}>PROJECTS</h1>
                     {this.state.projects.map(project => {
                        return( <Project key={project.key}img={project.image} title={project.title} about={project.about} codeURL ={project.codeURL} url={project.url}/>)
                    })}
                </div>
               
               
            </div>
            );
        }
    }

    export default ProjectBoard;