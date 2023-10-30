import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import "bootstrap/dist/js/bootstrap.js"

export const URL = "https://moh-auth-dev.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
    
        </AuthContextProvider>
    </React.StrictMode>
);
