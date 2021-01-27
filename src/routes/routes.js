import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Components/Dashboard/Dashboard';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import { StoreProvider } from '../Infrastructure/Store/Store';
import PrivateRoute from './PrivateRoute';

function Rotas() {
  return (
    <div>
      <StoreProvider>
        <BrowserRouter>
            <Routes>
              <Route path="login/*" element={<Login />} />
              <Route path="/" element={<Home />} />
              <PrivateRoute path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default Rotas;
