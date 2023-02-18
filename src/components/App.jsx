import '../styles/style.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import UserList from './User/UserList';
import UserProfile from './User/UserProfile';

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
      {
        path: "/user/:id",
        element: <UserProfile />,
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
