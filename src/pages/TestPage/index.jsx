import { Outlet } from 'react-router-dom';
import tests from '../../../tests.json';
import { useParams } from 'react-router-dom';
import './style.css';

export const TestPage = () => {
  const { testId } = useParams();
  const test = tests[testId];

  return (
    <>
      <h1 className="testPage__title">{test.title}</h1>

      <Outlet context={test} />
    </>
  );
};
