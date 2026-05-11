"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--charcoal)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(184,151,90,0.03) 0px, rgba(184,151,90,0.03) 1px, transparent 1px, transparent 60px)",
          pointerEvents: "none",
        }}
      />

      {/* Right accent line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "10%",
          top: "15%",
          bottom: "15%",
          width: "1px",
          backgroundColor: "rgba(184,151,90,0.12)",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "10rem",
          paddingBottom: "8rem",
        }}
      >
        <span
          className="t-label fade-in"
          style={{ color: "var(--gold)", marginBottom: "2rem", display: "block" }}
        >
          Private Concierge & Risk Management
        </span>

        <h1
          className="t-display fade-in fade-in-delay-1"
          style={{ color: "var(--white)", maxWidth: "14ch", marginBottom: "0.5rem" }}
        >
          Execution.
        </h1>
        <h1
          className="t-display fade-in fade-in-delay-2"
          style={{ color: "var(--gold)", fontStyle: "italic", maxWidth: "14ch", marginBottom: "0.5rem" }}
        >
          Verification.
        </h1>
        <h1
          className="t-display fade-in fade-in-delay-3"
          style={{ color: "rgba(255,255,255,0.5)", maxWidth: "14ch", marginBottom: "3rem" }}
        >
          Peace of Mind.
        </h1>

        <span className="gold-rule fade-in fade-in-delay-3" style={{ marginBottom: "2.5rem" }} />

        <p
          className="fade-in fade-in-delay-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "42ch",
            lineHeight: 1.75,
            marginBottom: "3.5rem",
          }}
        >
          A private concierge company that verifies, executes and protects
          your interest precisely, discreetly and accountably, when you
          are not physically present.
        </p>

        <div
          className="fade-in fade-in-delay-4"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link href="#contact" className="btn-primary">
            Begin a Request
          </Link>
          <Link href="#packages" className="btn-ghost">
            View Packages
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--white)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "var(--gold)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
