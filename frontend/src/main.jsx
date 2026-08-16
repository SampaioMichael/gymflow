/**
 * Ponto de entrada da aplicação GymFlow.
 *
 * Responsabilidades:
 * - Inicializar a aplicação React.
 * - Carregar os estilos globais.
 * - Renderizar o componente raiz.
 */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/variables.css";
import "./index.css";

/**
 * Elemento raiz da aplicação.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Elemento '#root' não encontrado.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);