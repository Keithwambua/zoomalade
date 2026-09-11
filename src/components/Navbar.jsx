import { Menu, X, Crown, ArrowDownToLine } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a href="#top" className="logo">
        <span className="logo-mark">Z</span>ZOOMALADE
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#top" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#explore" onClick={() => setOpen(false)}>
          Explore
        </a>
        <a href="#explore" onClick={() => setOpen(false)}>
          Categories
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
      </nav>
      <div className="nav-actions">
        <button className="login-link">Log in</button>
        <Button className="get-started">
          Get started <ArrowDownToLine size={16} />
        </Button>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="premium-note">
        <Crown size={15} /> Premium media, made simple
      </div>
    </header>
  );
}
