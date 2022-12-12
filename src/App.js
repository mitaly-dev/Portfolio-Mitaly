import { useContext } from 'react';
import {RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className='dark'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
