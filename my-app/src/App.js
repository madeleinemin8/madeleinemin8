import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Work from './pages/work';
import GraphContainer from './components/GraphContainer';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
	  <GraphContainer />
	  <Routes>
		  <Route exact path='/' element={<Home />} />
		  <Route path='/work' element={<Work/>} />
		  <Route path='/contact' element={<Contact/>} />
	  </Routes>
	  </Router>
  );
}

export default App;
