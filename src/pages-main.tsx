import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Research from "../app/research/page";
import Blog from "../app/blog/page";
import "../app/globals.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = path === "/research" ? Research : path === "/blog" ? Blog : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
