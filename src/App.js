import { Container } from "@mui/material";
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import {HomePage,AboutPage,ContactPage, PageNoFound} from './components/ListAsyncPage';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='App'>
        <Container maxWidth="lg"> 
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<PageNoFound/>}/>
        </Routes>
        </Container> 
      </div>
      <Footer/>
     </Router>
  );
}

export default App;
