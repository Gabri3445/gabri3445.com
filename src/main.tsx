import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./components/Home/HomeLayout.tsx";
import ButtonList from "./components/ButtonList/ButtonList.tsx";
import Login from "./components/Login/Login.tsx";
import FileSystemRoute from "./components/FileSystem/FileSystemRoute.tsx";
import MarkdownRoute from "./components/Markdown/MarkdownRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomeLayout />}>
            <Route
              path="/"
              element={
                <div className="md:ml-6 ml-2 mr-6 md:mr-0 mt-8">
                  <ButtonList />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/file-system" element={<FileSystemRoute />}></Route>
          <Route path="/file/:fileName" element={<MarkdownRoute />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);

// <App />
