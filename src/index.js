import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./style.css";
import Home from "./Routes/Home/Home";
import Prorducts from "./Routes/Products/Prorducts";
import AddProduct from "./Routes/Products/AddProduct";
import SignIn from "./Routes/Auth/SignIn";
import NotAuthed from "./Routes/NotAuthed/NotAuthed";

const root = ReactDOM.createRoot(document.getElementById("root"));

const token = localStorage.getItem("token") ?? null;

const router = createBrowserRouter([
  {
    path: "/",
    element: token != null ? <Home /> : <NotAuthed />,
  },
  {
    path: "/products",
    element: token != null ? <Prorducts /> : <NotAuthed />,
  },
  {
    path: "/add-product",
    element: token != null ? <AddProduct /> : <NotAuthed />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
