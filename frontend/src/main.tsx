import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthenticationProvider } from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthenticationProvider>
        <App />
        </AuthenticationProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
