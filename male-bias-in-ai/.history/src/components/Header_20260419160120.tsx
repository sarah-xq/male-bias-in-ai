import { type JSX } from "react";
import "./Header.css";

interface NavLink {
  name: string;
  href: string;
  isActive: boolean;
}

export function Header(): JSX.Element {
  const navLinks: NavLink[] = [
    { name: "Home", href: "#", isActive: true },
    { name: "Research Papers", href: "#", isActive: false },
    { name: "Personal Findings", href: "#", isActive: false },
  ];

  return (
    <header className="header-container">
      <div className="header-logo">The AI Bias Archive</div>
      <nav className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`nav-item ${link.isActive ? "active" : ""}`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
