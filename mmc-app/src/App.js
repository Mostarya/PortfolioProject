import Header from './components/Header';
import Footer from './components/Footer';

//pages
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='reservations' element={<ReservationPage />} />
          <Route path='careers' element={<CareerPage />} />
          <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
