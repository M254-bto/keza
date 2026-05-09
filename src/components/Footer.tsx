"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#clients", label: "Who We Serve" },
  { href: "#why-keza", label: "Why Keza" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--ink)",
        padding: "5rem 2rem 3rem",
        borderTop: "1px solid rgba(184,151,90,0.15)",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "var(--white)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
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
                  marginBottom: "3px",
                }}
              />
            </span>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.825rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                maxWidth: "28ch",
              }}
            >
              Private concierge and risk management — precisely executed, discreetly delivered.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              Navigate
            </span>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              Contact
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="https://wa.me/254768512338"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                +254 768 512 338
              </a>
              <a
                href="mailto:kezaconciergeglobal@gmail.com"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                kezaconciergeglobal@gmail.com
              </a>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.825rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Kenya — On-ground operations
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © {new Date().getFullYear()} Keza Concierge Global. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Precision. Discretion. Peace of Mind.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-top {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 540px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
