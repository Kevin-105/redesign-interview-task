import React from 'react';
import {Route, Routes,  BrowserRouter as Router} from "react-router-dom";

import News from './Pages/News';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<News/>} />
          <Route path='news/:filter' element={<News/>} />
          <Route path='*' element={<NotFound/>} />    
        </Routes>
      </Router>

      </React.Fragment>
    </div>
      
  );
}

export default App;