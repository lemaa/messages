import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MessageProvider } from "./context/Messages";

import reportWebVitals from './reportWebVitals';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./containers/Home/index";
import { Global } from "./globalStyle";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <MessageProvider>
            <Global />
            <Header title="Message List" />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </Router>
            {/* <Footer>
                <p> made by Amel Fezai</p>
            </Footer> */}
        </MessageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
