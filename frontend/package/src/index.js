import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Perfil from "./views/perfilUsuarios/perfil";
import Usuarios from "./views/usuarios/usuarios";
import Juegos from "./views/juegos/juegos";
import Desarrolladores from "./views/desarrolladores/desarrolladores";

const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/custom-components" element={<CustomComponents />} />
      <Route path="/desarroladores" element={<Desarrolladores />} />
      <Route path="/juegos" element={<Juegos />} />
      <Route path="/usuario" element={<Usuarios />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/" element={<Components />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
