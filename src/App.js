import './App.css';
import Header from "./components/Header";
import Jumbotron from './components/Jumbotron';
import ProjectBoard from './components/ProjectBoard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import "react-animated-css";

function App() {
  return (
    <>
          <Header/>
      
            <Jumbotron />
            <ProjectBoard/>
          
  
          < Footer/>
    </>
  );
}

export default App;
