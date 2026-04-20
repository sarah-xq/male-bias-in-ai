import { type JSX } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import "./MainLayout.css";
import "../styles/bootstrap-icons.css";
import "../styles/bootstrap.min.css";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/templatemo-medic-care.css";

export function MainLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
