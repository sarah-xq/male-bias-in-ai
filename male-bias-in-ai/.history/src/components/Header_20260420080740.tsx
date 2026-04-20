import { type JSX } from "react";
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <header>
      <div className="navbar">AI Bias Findings</div>
      <nav>
        <NavLink to="/male-bias-in-ai">Home</NavLink>
        <NavLink to="/male-bias-in-ai/research">Research</NavLink>
        <NavLink to="/male-bias-in-ai/personal-findings">
          Personal Findings
        </NavLink>
        <NavLink to="/male-bias-in-ai/disclaimer">Disclaimer</NavLink>
        <NavLink to="/male-bias-in-ai/reflection">Reflection</NavLink>
      </nav>
    </header>
  );
}
