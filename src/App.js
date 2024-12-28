import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar'
import Home from './Page/Home';
import Footer from './Components/Footer';
import Service from './Page/Service';

function App() {
  return (
    <>
    <Router>

        <NavBar />

        <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Service" element={<Service/>} />
        </Routes>
        </main>


        {/* Footer */}
        <Footer />
    </Router>
    
    </>
  );
}

export default App;
