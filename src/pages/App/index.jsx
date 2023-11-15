import { Outlet } from 'react-router-dom';
import './style.css';

export const App = () => {
  return (
    <div className="container">
      <h1>App</h1>
      <Outlet />
    </div>
  );
};
