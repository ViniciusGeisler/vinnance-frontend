import { Route, Routes } from "react-router-dom";

import { SignUpPage } from "./pages/signup";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

export function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<SignUpPage />} path="/signup" />
      <Route element={<HomePage />} path="/home" />
    </Routes>
  );
}

