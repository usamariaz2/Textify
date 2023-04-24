import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Textutlis from './components/Textutlis';
import Navbar from './components/Navbar';
import Textsummary from './components/Textsummary';
import Texttovoice from './components/Texttovoice';
import About from './components/About';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Textutlis/>} />
        <Route path='/Textsummary' element={<Textsummary/>} />
        <Route path='/txttovoice' element={<Texttovoice/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
