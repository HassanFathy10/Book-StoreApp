import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './store';
import RootLayout from './pages/RootLayout';
import EditBook from './pages/EditBook';
import AddBook from './pages/AddBook';
import ErrorPage from './pages/ErrorPage';
import BookContainer from './components/BookContainer';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement : <ErrorPage />,
    children: [
      { path: "book/:id/edit", element: <EditBook /> },
      { path: "book/add", element: <AddBook /> },
      { path: "/", element: <BookContainer /> },
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
