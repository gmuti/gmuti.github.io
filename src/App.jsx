import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez BrowserRouter as Router
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
