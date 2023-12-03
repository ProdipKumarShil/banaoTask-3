import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
