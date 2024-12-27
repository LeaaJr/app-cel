import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar'
import Home from './Page/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>

        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
