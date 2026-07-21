import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n";
import i18n from "./i18n/i18n";
import App from "./App.jsx";
import "./index.css";

document.documentElement.lang = i18n.language;

document.documentElement.dir =
    i18n.language === "ar"
        ? "rtl"
        : "ltr";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </React.StrictMode>
);
