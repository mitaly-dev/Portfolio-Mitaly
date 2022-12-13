import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DashboardProvider from './context/DashboardProvider';
import { Toaster } from 'react-hot-toast';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { ProjectApi } from './Redux/ProjectApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardProvider>
    <ApiProvider api={ProjectApi}>
      <Toaster />
      <App />
    </ApiProvider>
    </DashboardProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
