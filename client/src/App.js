import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Community from './components/views/Community';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/cohorts/team-asphalt" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  max-width: 100vw;
`;

export default App;
