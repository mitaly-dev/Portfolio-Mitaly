import { useContext } from 'react';
import {RouterProvider } from 'react-router-dom';
import { DashboardContext } from './context/DashboardProvider';
import { router } from './routes/Route';

function App() {
  const {dark} = useContext(DashboardContext)
  return (
    <div className={`${dark && 'dark'}`}>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
