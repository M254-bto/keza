"use client";

const pillars = [
  {
    number: "01",
    title: "Trust",
    body: "Every engagement is built on a verified chain of accountability. You know who acts, what was done, and when.",
  },
  {
    number: "02",
    title: "Execution",
    body: "We don't advise. We do. From the first instruction to final confirmation, we carry the task through to completion.",
  },
  {
    number: "03",
    title: "Verification",
    body: "Nothing is assumed. Property checks, asset inspections, errand confirmations — documented and delivered.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "8rem 2rem",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
            The Core Offer
          </span>
          <h2
            className="t-h1 fade-in fade-in-delay-1"
            style={{ maxWidth: "22ch", color: "var(--ink)", marginBottom: "1.5rem" }}
          >
            Not errands. Not luxury.
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {" "}We sell outcomes.
            </span>
          </h2>
          <span className="gold-rule fade-in fade-in-delay-2" />
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            borderTop: "1px solid var(--smoke)",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{
                padding: "3rem 2.5rem",
                borderRight: i < pillars.length - 1 ? "1px solid var(--smoke)" : "none",
                borderBottom: "1px solid var(--smoke)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--ivory-dark)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
              }
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "var(--gold-pale)",
                  display: "block",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {p.number}
              </span>
              <h3 className="t-h3" style={{ color: "var(--ink)", marginBottom: "1rem" }}>
                {p.title}
              </h3>
              <p className="t-body">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Positioning statement */}
        <div
          className="fade-in pillars-quote"
          style={{
            marginTop: "6rem",
            padding: "3.5rem",
            backgroundColor: "var(--charcoal)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <span className="t-label" style={{ display: "block", marginBottom: "1.5rem" }}>
              Our Mission
            </span>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1.5,
                fontStyle: "italic",
              }}
            >
              "To deliver precise, discreet and accountable concierge and risk
              management solutions that ensure seamless execution and complete
              peace of mind."
            </p>
          </div>
          <div>
            <span className="t-label" style={{ display: "block", marginBottom: "1.5rem" }}>
              Our Vision
            </span>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
              }}
            >
              To become the global benchmark for private concierge and
              on-ground risk management services — recognised for precision,
              discretion and unwavering accountability.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillars-quote {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
