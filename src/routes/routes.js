import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
// import { UserStorage } from './UserContext';

function Rotas() {
  return (
    <div>
      <BrowserRouter>
        {/* <UserStorage> */}
          <Routes>
            <Route path="login/*" element={<Login />} />
          </Routes>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        {/* </UserStorage> */}
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
