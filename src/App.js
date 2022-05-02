import { Container } from "@mui/material";
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import {HomePage,AboutPage,ContactPage, PageNoFound,LoginPage,RegisterPage} from './components/ListAsyncPage';
// import { UserAuthContext } from "./context/ChatContext";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

import './App.css';

function App() {
  return (
    // <UserAuthContext> 
      <Router>
        <Navbar/>
          <div className='App'>
            <Container maxWidth="lg"> 
              <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="*" element={<PageNoFound/>}/>
            </Routes>
            </Container> 
          </div>
        <Footer/>
      </Router>
    // {/* </UserAuthContext>   */}
  );
}

export default App;
