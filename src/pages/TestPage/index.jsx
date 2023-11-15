import { Outlet } from 'react-router-dom';

export const TestPage = () => {
  return (
    <div>
      <h3>Test Page</h3>
      <Outlet />
    </div>
  );
};
