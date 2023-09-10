import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './store';
import RootLayout from './pages/RootLayout';
import EditForm from './pages/EditForm';
import Addform from './pages/AddForm';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement : <ErrorPage />,
    children: [
      { path: "book/:id/edit", element: <EditForm /> },
      { path: "book/add", element: <Addform /> }
    ]
  }
])


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
