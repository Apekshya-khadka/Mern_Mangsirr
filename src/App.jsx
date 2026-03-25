
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';

export default function App() {

  const router = createBrowserRouter([


    {
      path:'/',
      element:<Home/>
    },

    {
      path:'about',
      element:<About/>
    },

    {
      path:'*',
      element:<NotFound/>
    },

  ]);
  return <RouterProvider router={router}/>
}
