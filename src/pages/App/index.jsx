import { Outlet, useLocation } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    }
  }, [location]);

  return (
    <div className="site">
      <Menu onToggleMenu={setMenuOpened} menuOpened={menuOpened} />
      <Outlet />
      <Footer />
    </div>
  );
};
