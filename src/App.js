import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './Component/Privacypolicy';
import Footer from './Component/Footer';
import TermCondition from './Component/TermCondition';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route exact path="/termCondition" element={<TermCondition />} />
 
    </Routes>
    <Footer />
    </BrowserRouter>
     
   
     </>
  );
}

export default App;
