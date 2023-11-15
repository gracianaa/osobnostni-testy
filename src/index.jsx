import { createRoot } from 'react-dom/client';
import { App } from './pages/App';
import { HomePage } from './pages/HomePage';
import { TestPage } from './pages/TestPage';
import { QuestionsPage } from './pages/QuestionsPage';
import { ResultsPage } from './pages/ResultsPage';
import { PersonalityPage } from './pages/PersonalityPage';
import { ErrorPage } from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'test',
        element: <TestPage />,
        children: [
          {
            path: '',
            element: <QuestionsPage />,
          },
          {
            path: 'results',
            element: <ResultsPage />,
          },
        ],
      },
      {
        path: 'personality',
        element: <PersonalityPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
