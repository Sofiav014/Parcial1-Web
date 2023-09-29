import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FormattedMessage } from "react-intl";
import localeEnMessages from "./locale/en";
import localeEsMessages from "./locale/es";
import Login from "./components/Login";

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/about" element={<App />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
