import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// SÓ TEM QUE IMPORTAR 1 VEZ
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import 'swiper/css';
// seta de navegação
import 'swiper/css/navigation';
// circulo de navegação
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import App from './App.jsx';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> } >
          <Route path='/' element={ <Home /> } />
          <Route path='movie/:id' element={ <Movie /> } />
          <Route path='search' element={ <Search /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
