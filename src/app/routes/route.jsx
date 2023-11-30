import Auth from '../../App';
import Main from '../pages/Main';
import TablePage from '../pages/Table';

import Instruction from '../pages/Instruction';
import DeveloperPage from '../pages/DeveloperPage';

import { createHashRouter } from 'react-router-dom';

export const routing = createHashRouter([
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
