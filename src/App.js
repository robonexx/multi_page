import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Nav from './components/nav';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <h1>My Articles</h1>
          <Nav />
        </header>

        {/* A bit different then the tutorial due to react router is now version 6 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/articles/:id' element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
