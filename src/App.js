import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
