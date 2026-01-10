import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/Home.tsx";
import ButtonList from "./components/ButtonList/ButtonList.tsx";
import Login from "./components/Login/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />}>
            <Route
              path="/"
              element={
                <div className="ml-6 mt-8">
                  <ButtonList />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);

// <App />
