import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Projects from '../components/Projects';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        path: '',
        element: <Dashboard />,
        children: [{ index: true, element: <Projects /> }],
      },
    ],
  },
]);

export default router;
