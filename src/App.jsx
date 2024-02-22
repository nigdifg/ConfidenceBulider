import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Bookslot from './components/Bookslot';
import BookslotForm from './components/BookslotForm';
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '64px' }}> {/* Adjust this value based on the height of your Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookslot" element={<Bookslot />} />
          <Route path ="/bookslotForm" element={<BookslotForm />} />
        </Routes>
      </div>
      <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-100 p-4 text-center border-t border-gray-200 dark:border-gray-600">
        <p>&copy; 2024 Interview Prep</p>
      </footer>
    </Router>
  );
}

export default App;