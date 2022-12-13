import { useContext, useEffect } from 'react';
import {RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return (
    <div className='dark'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
