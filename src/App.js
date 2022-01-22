import React from 'react';
import './App.css';
import {Route, Routes,  BrowserRouter as Router} from "react-router-dom";
import { Container } from '@mui/material';
import News from './Pages/News';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

import Header from './Components/Header';
import Footer from './Components/Footer';

/**
 * Make routing here instead of creating new File.
 * I didn't create Register page because i don't have its API so, i just leave it. 
 */

function App() {
  return (
    <div className="App">
      <Container fixed>
        <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<News/>} />
            <Route path="login" element={<Login/>} />
            <Route path='news/:filter' element={<News/>} />
            <Route path='*' element={<NotFound/>} />    
          </Routes>
          <Footer />
        </Router>
        </React.Fragment>
      </Container>
    </div>
      
  );
}

export default App;