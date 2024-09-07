import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
