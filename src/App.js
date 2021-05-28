import logo from './logo.svg';
import './App.css';
import image from './Images/il_340x270.2825980348_jf7g.jpg';
import Footer from "./Components/Footer.js";
import Counter from "./Components/Counter.js"
import Profile from "./Components/Profile.js";

function App() {
  return (
    <div>
      <div className= 'container'>
        <div className= 'main'>
          <div >
            <img className= 'image' src= {image} alt= "woman at computer" height={200} width= {200}/>

          </div>
          <Profile intro= {'My Name is Theresa'} />
        

          <Counter  count = {0}/>
          <Footer/>
        </div>
       
      </div>
    </div>
  );
}

export default App;
