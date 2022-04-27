import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './view/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;
