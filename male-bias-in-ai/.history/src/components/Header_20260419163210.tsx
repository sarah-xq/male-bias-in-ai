import { type JSX } from "react";
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <header>
      <div>AI Bias Findings</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/personal-findings">Personal Findings</NavLink>
        <NavLink to="/disclaimer">Disclaimer</NavLink>
      </nav>
    </header>
  );
}
