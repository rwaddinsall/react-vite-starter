import './index.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
