import './App.css';
import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import HomeComponent from './components/homeComponent/homeComponent';
import PackageComponent from './components/packageComponent/packageComponent';
import ExperienceComponent from './components/experienceComponent/experienceComponent';
function App() {
  return (
    <Router>
    <div className="App">
      <div class="App-header">
      
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/experience">Experiences</Link>
       

        
      </div>
      <Routes>

        <Route exact path='/' element={<HomeComponent/>}></Route>
        <Route path='/packages' element={<PackageComponent/>}></Route>
        <Route path='/experience' element={<ExperienceComponent/>}></Route>



      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
