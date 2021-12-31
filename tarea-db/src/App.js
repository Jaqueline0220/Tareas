import './App.css';
import MenuPrincipal from './components/MenuPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Productdetails from './components/Pages/Productdetails';

function App() {
  return (
    <>
      <Router>
        <MenuPrincipal />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detalle/:id" element={<Productdetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
