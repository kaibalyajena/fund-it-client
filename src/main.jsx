// import React from 'react';
//  import ReactDOM from 'react-dom/client';
//  import { BrowserRouter as Router } from 'react-router-dom';
//  import { ChainId,ThirdwebProvider } from '@thirdweb-dev/react';
//  import App from './App'; b


//  const root = ReactDOM.createRoot(document.getElementById('root'));

//  root.render(
//      <React.StrictMode>
//     <ThirdwebProvider  desiredChainId={ChainId.Goerli}>
//     <App />
//   </ThirdwebProvider>
// </React.StrictMode>
//  )


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import {ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import './index.css'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "goerli";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider  desiredChainId={ChainId.Goerli}>
        <Router>
          <StateContextProvider>  
            <App />
          </StateContextProvider>
        </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
