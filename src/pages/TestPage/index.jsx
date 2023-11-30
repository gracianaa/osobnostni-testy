import { Outlet } from 'react-router-dom';
import tests from '../../../tests.json';

export const TestPage = () => {
  return (
    <div>
      <h1>{tests[0].title}</h1>
      <Outlet />
    </div>
  );
};
