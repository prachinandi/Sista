import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

import Community from './components/views/Community';
import AuthDetails from './components/views/AuthDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cohorts/team-asphalt" element={<Community />} />
          <Route exact path="/register/details" element={<AuthDetails />} />
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
