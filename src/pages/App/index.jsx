import { Outlet, useLocation } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';

const scrollToHash = (hash) => {
  if (hash) {
    document.querySelector(hash)?.scrollIntoView();
  }
};

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    const hash = e.target.closest('a')?.hash;
    scrollToHash(hash);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  return (
    <div id="home" className="site" onClick={handleClick}>
      <Menu onToggleMenu={setMenuOpened} menuOpened={menuOpened} />
      <Outlet />
      <Footer />
    </div>
  );
};
