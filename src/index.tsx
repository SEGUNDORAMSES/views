import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonios from './Views/Testimonios';
import Beneficios from './Views/Beneficios';
import Formulario from './Views/Formulario';
import Tecnologias from './Views/Tecnologias';
import Home from './Views/Home';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='/testimonios' element={<Testimonios></Testimonios>}></Route>
      <Route path='/beneficios' element={<Beneficios></Beneficios>}></Route>
      <Route path='/formulario' element={<Formulario></Formulario>}></Route>
      <Route path='/tecnologias' element={<Tecnologias></Tecnologias>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      
      
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
