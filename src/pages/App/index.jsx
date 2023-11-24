import { Outlet } from 'react-router-dom';
import './style.css';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
