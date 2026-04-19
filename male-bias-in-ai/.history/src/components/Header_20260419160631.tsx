import { type JSX } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <header className="header-container">
      <div className="header-logo">The AI Bias Archive</div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/personal-findings">Research</NavLink>
      </nav>
    </header>
  );
}
