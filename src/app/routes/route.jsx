import Auth from '../../App';
import Main from '../pages/Main';
import TablePage from '../pages/Table';

import Instruction from '../pages/Instruction';
import DeveloperPage from '../pages/DeveloperPage';

import { createBrowserRouter } from 'react-router-dom';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    index: true,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/table',
    element: <TablePage />,
  },
  {
    path: '/instruction',
    element: <Instruction />,
  },
  {
    path: '/developerPage',
    element: <DeveloperPage />,
  },
]);
