import { Outlet } from 'react-router-dom';
import tests from '../../../tests.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../components/Button';

export const TestPage = () => {
  const { testId } = useParams();
  const test = tests[testId];

  return (
    <>
      <h1>{test.title}</h1>

      <Outlet context={test} />
    </>
  );
};
