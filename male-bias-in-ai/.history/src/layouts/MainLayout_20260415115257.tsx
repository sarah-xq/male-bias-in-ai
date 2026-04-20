import { type JSX, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer.tsx";
import Sidebar from "../components/Sidebar.tsx";
import "./MainLayout.css";

export function MainLayout(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header openSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-layout">
        {sidebarOpen && <Sidebar />}
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
