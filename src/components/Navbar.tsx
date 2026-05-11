"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#packages", label: "Services" },
  { href: "#clients", label: "Who We Serve" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background-color 0.4s ease, border-bottom 0.4s ease, padding 0.3s ease",
          backgroundColor: scrolled || menuOpen ? "rgba(20, 20, 20, 0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(184,151,90,0.15)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.2em",
            color: "var(--white)",
            textDecoration: "none",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 201,
          }}
        >
          Keza
          <span
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "var(--gold)",
              marginLeft: "3px",
              verticalAlign: "middle",
              marginBottom: "2px",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="nav-links"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")
              }
            >
              {l.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary" style={{ padding: "0.65rem 1.6rem" }}>
            Begin a Request
          </Link>
        </div>

        {/* Mobile Hamburger — always above overlay */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            position: "relative",
            zIndex: 201,
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--white)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(4px, 4.5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(4px, -4.5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--charcoal)",
          zIndex: 199,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="mobile-overlay"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--white)")
            }
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: "0.5rem" }}
        >
          Begin a Request
        </Link>

        {/* Bottom contact hint */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            textAlign: "center",
          }}
        >
          <a
            href="https://wa.me/254768512338"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}
          >
            +254 768 512 338
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-overlay { display: none !important; }
        }
        @media (max-width: 400px) {
          nav { padding: 1rem 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
