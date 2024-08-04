import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./styles/globals.css"; // Tệp CSS của Tailwind
import Home from "./home.js";
import LoginPage from "./components/main/login.js";
import RegisterPage from "./components/main/register.js";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
