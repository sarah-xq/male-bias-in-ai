import { type JSX } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer.tsx";
import "./MainLayout.css";

export function MainLayout(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
