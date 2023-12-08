import { Outlet } from 'react-router-dom';
import tests from '../../../tests.json';
import { useParams } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

export const TestPage = () => {
  const { testId } = useParams();
  const test = tests[testId];

  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div
      onClick={() => (shareOpen ? setShareOpen(false) : null)}
      className="testPage"
    >
      <h1 className="testPage__title">{test.title}</h1>

      <Outlet context={[test, shareOpen, setShareOpen]} />
    </div>
  );
};
