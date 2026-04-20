import { type JSX } from "react";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import { Header } from "../components/Header";

export function MainLayout(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}
