import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [{ path: '', element: <Dashboard />, children: [] }],
  },
]);

export default router;
