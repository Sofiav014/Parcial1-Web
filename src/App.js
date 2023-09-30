import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FormattedMessage } from "react-intl";
import localeEnMessages from "./locale/en";
import localeEsMessages from "./locale/es";
import Login from "./components/Login";
import Header from './components/Header';

import CafeList from './components/CafeList';



function idiomaNavegador() {
  const idiomasDisponibles = ['en', 'es', "es-ES"];
  const idiomaNavegador = navigator.language || navigator.userLanguage;

  if (idiomasDisponibles.includes(idiomaNavegador)) {
    return idiomaNavegador;
  }
  return 'en';
}

function App() {

  const language = idiomaNavegador();
  const message = language.includes("es") ? localeEsMessages : localeEnMessages;

  return (
    <div className="App">
      <IntlProvider locale={language} messages={message}>
        <div>
          <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cafeList" element={<CafeList />} />
            </Routes>
          </BrowserRouter>
          <br />
          <br />
          <br />
          <footer className="">
            Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
          </footer>

        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
