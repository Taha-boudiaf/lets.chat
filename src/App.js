import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import {HomePage,AboutPage,ContactPage} from './components/ListAsyncPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;
