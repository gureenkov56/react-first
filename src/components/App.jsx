import '../styles/style.scss';
import UserList from './UserList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
