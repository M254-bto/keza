"use client";

const secondary = [
  { label: "Busy Professionals", desc: "Executives and managers who need tasks handled without distraction." },
  { label: "Property Owners", desc: "Remote landlords needing regular inspections and tenant follow-ups." },
  { label: "Families", desc: "Loved ones needing care oversight, welfare checks and family errands." },
  { label: "SMEs & NGOs", desc: "Organisations requiring ground-level coordination and verification." },
];

export default function WhoWeServe() {
  return (
    <section
      id="clients"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "8rem 2rem",
      }}
    >
      <div className="container">
        <div
          className="clients-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left: Primary */}
          <div>
            <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
              Who We Serve
            </span>
            <h2
              className="t-h1 fade-in fade-in-delay-1"
              style={{ color: "var(--ink)", marginBottom: "2.5rem" }}
            >
              Built first for the{" "}
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
                diaspora.
              </span>
            </h2>
            <p
              className="t-body fade-in fade-in-delay-2"
              style={{ marginBottom: "2.5rem", fontSize: "1.05rem", maxWidth: "42ch" }}
            >
              Our primary client is the Kenyan in the diaspora — the one who left, who built
              a life abroad, and who still has property, family and responsibilities at home.
              You need someone you can trust to act precisely in your absence.
            </p>
            <div
              className="fade-in fade-in-delay-3"
              style={{
                padding: "2rem 2.5rem",
                backgroundColor: "var(--gold-pale)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.6,
                }}
              >
                "At Keza, we structure our service into three levels depending on
                how much you want handled and how fast you need it done."
              </p>
            </div>
          </div>

          {/* Right: Secondary */}
          <div>
            <span
              className="t-label fade-in"
              style={{ display: "block", marginBottom: "2.5rem" }}
            >
              Also Serving
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {secondary.map((s, i) => (
                <div
                  key={s.label}
                  className={`fade-in fade-in-delay-${i + 1}`}
                  style={{
                    padding: "2rem 0",
                    borderBottom: "1px solid var(--smoke)",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "var(--gold)",
                      paddingTop: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.825rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
