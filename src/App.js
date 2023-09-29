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

import { Container, Row } from "react-bootstrap";
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
          <Container fluid className="container-reset">
            <Row >
                <Container className='hero'>
                  <img src="https://images.ctfassets.net/zmu0ll2b1db8/6faYYwdbXsdCmWZGKLd42c/c2ceefafdafb2c2cff15f7d18f07e6e2/anastasiia-chepinska-lcfH0p6emhw-unsplash__1_.jpg" alt="hro" />
                </Container>
                  
            </Row>

          </Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cafeList" element={<CafeList />} />
              {/* <Route path="/about" element={<App />} /> */}
            </Routes>
          </BrowserRouter>
          <br />
          <br />
          <br />
          <footer className="blockquote-footer">
            Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
          </footer>

        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
