import { type JSX } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import "./MainLayout.css";

export function MainLayout(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}
