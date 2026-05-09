"use client";

import Link from "next/link";

const addons = [
  {
    title: "Emergency Tasks",
    body: "Immediate response for time-critical situations outside your regular plan.",
  },
  {
    title: "Long-Distance Errands",
    body: "Out-of-town or cross-county assignments requiring additional travel and logistics.",
  },
  {
    title: "Large Purchases & Logistics",
    body: "Sourcing, negotiation, payment handling and physical delivery of high-value goods.",
  },
  {
    title: "Deep Verification Reports",
    body: "Detailed written inspection reports with photographic evidence and formal documentation.",
  },
];

export default function AddOns() {
  return (
    <section
      id="addons"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "8rem 2rem",
      }}
    >
      <div className="container">
        <div
          className="addons-grid-outer"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left: header */}
          <div>
            <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
              Pay As You Go
            </span>
            <h2
              className="t-h1 fade-in fade-in-delay-1"
              style={{ color: "var(--white)", marginBottom: "2rem" }}
            >
              Add-On Services
            </h2>
            <p
              className="fade-in fade-in-delay-2"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Available as individual engagements or supplementary to any existing
              package. Billed separately based on scope.
            </p>
            <Link href="#contact" className="btn-outline fade-in fade-in-delay-3">
              Discuss Add-Ons
            </Link>
          </div>

          {/* Right: grid */}
          <div
            className="addons-grid-inner"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            {addons.map((addon, i) => (
              <div
                key={addon.title}
                className={`fade-in fade-in-delay-${i + 1}`}
                style={{
                  padding: "2.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(184,151,90,0.05)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
                }
              >
                <div
                  style={{
                    width: "24px",
                    height: "1px",
                    backgroundColor: "var(--gold)",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  className="t-h3"
                  style={{ color: "var(--white)", marginBottom: "0.75rem" }}
                >
                  {addon.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.65,
                  }}
                >
                  {addon.body}
                </p>
              </div>
            ))}
            <div
              style={{
                gridColumn: "1 / -1",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .addons-grid-outer {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .addons-grid-inner {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .addons-grid-inner {
            grid-template-columns: 1fr !important;
          }
          /* Remove odd-item right border when stacked to 1 col */
          .addons-grid-inner > div {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
