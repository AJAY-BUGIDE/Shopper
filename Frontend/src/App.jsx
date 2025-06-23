
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing_page from './Components/Utilities/Landing_page'
import Collections from './Components/Body/Collections'
import Footer_down from './Components/ExtraBody/Footer_down'
import Header from './Components/Utilities/Header'
import ShopCategory from './Pages/ShopCategory'
import banner_mens from '../public/Frontend_Assets/banner_mens.png'
import banner_womens from '../public/Frontend_Assets/banner_women.png'
import banner_kids from '../public/Frontend_Assets/banner_kids.png'
import LoginSignup from './Pages/LoginSignup'

function AppWrapper() {
  const location = useLocation();

  // Optionally scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hideHeaderFooter = location.pathname === '/login';
  console.log("Current Path:", location.pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {!hideHeaderFooter && <br />}
      {!hideHeaderFooter && <br />}

      <Routes>
        <Route path='/' element={<Landing_page />} />
        <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={banner_womens} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>

      {!hideHeaderFooter && <Footer_down />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
