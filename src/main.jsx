import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS
import './index.css';
import './reset.css';

// Import React Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import Components
import ErrorPage from './routes/ErrorPage.jsx';
import App from './routes/App.jsx';
import Layout from './routes/Layout.jsx';

// Import Route components
import AboutUs from './routes/about-us/AboutUs.jsx';
import Form from './routes/form/Form.jsx';
import AdminPanel from './routes/admin/Admin.jsx';
import AdminLogin from './routes/admin/login/Login.jsx';
import ProtectedRoute from './routes/_auth-components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'form',
        element: <Form />
      },
      {
        path: 'admin/',
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute role="admin">
                <AdminPanel />
              </ProtectedRoute>
            )
          },
          {
            path: 'login',
            element: <AdminLogin />
          }
        ]
      }
    ],
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
