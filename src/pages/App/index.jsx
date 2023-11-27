import { Outlet } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { useState } from 'react';

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="site">
      <Menu onToggleMenu={setMenuOpened} menuOpened={menuOpened} />
      <Outlet />
      <Footer />
    </div>
  );
};
