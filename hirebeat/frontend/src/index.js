import App from "./components/App";
import ReactDOM from "react-dom";
import React from "react";
import "bootswatch/dist/materia/bootstrap.min.css";
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme'

// Disable all console messages in production
console.log = function () { };
console.error = function () { };
console.exception = function () { };
console.warn = function () { };

const config = {
     initialColorMode: 'light',
     useSystemColorMode: false,
}

const myTheme = extendTheme(
     {
          colors: {
               ...theme.colors, brand: {
                    100: "#afd3ff",
                    200: "#7db6ff",
                    300: "#4b99ff",
                    400: "#1a7cff",
                    500: "#0062e6",
                    600: "#004cb4",
                    700: "#003682",
                    800: "#090d3a",
               }
          },
          styles: {
               global: {
                    // styles for the `body`
                    body: {
                         fontFamily: 'Inter, Segoe UI',
                    },
               },
          },
     },
     config,
     theme,
)


ReactDOM.render(
     <ChakraProvider theme={myTheme}>
          <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
          <App />
     </ChakraProvider>,
     document.getElementById("app"));

//This actual template, the html file is in frontend/static/frontend
