import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
