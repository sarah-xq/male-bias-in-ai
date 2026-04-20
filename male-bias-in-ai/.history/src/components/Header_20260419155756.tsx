import { type JSX } from "react";
import styles from "./Header.module.css";

export function Header(): JSX.Element {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Research Papers", href: "#", active: false },
    { name: "Personal Findings", href: "#", active: false },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>The AI Bias Archive</div>
      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`${styles.navItem} ${link.active ? styles.active : ""}`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
