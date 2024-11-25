import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Apple from "./Apple";
import Car from "./Car";
import Profile from "./Profile.jsx";
import Greeting from "./Greeting.jsx";
import Headers from "./components/Headers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <Greeting /> */}

    <Headers />
  </StrictMode>
);
