import { type JSX } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <header className="header-container">
      <div className="header-logo">AI Bias Findings</div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/personal-findings">Personal Findings</NavLink>
        <NavLink to="/disclaimer">Disclaimer</NavLink>
      </nav>
    </header>
  );
}
