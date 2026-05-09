"use client";

const differentiators = [
  {
    number: "01",
    title: "On-Ground Presence",
    body: "We don't coordinate from a desk. We show up — physically verifying, executing and documenting everything in person.",
  },
  {
    number: "02",
    title: "Documented Accountability",
    body: "Every task leaves a paper trail. Photos, receipts, signed confirmations and reports are standard — not exceptions.",
  },
  {
    number: "03",
    title: "Unwavering Discretion",
    body: "Confidentiality is non-negotiable. Your affairs, your assets, your family — handled with complete privacy and professionalism.",
  },
];

export default function WhyKeza() {
  return (
    <section
      id="why-keza"
      style={{
        backgroundColor: "var(--ivory-dark)",
        padding: "8rem 2rem",
        borderTop: "1px solid var(--smoke)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "6rem",
          }}
        >
          <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
            The Keza Difference
          </span>
          <h2
            className="t-h1 fade-in fade-in-delay-1"
            style={{ color: "var(--ink)", maxWidth: "24ch", marginBottom: "2rem" }}
          >
            Why clients trust us with what matters most
          </h2>
          <span className="gold-rule-long fade-in fade-in-delay-2" />
        </div>

        {/* Differentiators */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            backgroundColor: "var(--smoke)",
          }}
        >
          {differentiators.map((d, i) => (
            <div
              key={d.number}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{
                padding: "4rem 3rem",
                backgroundColor: "var(--ivory)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "var(--gold-pale)",
                  lineHeight: 1,
                }}
              >
                {d.number}
              </span>
              <h3
                className="t-h3"
                style={{ color: "var(--ink)" }}
              >
                {d.title}
              </h3>
              <span
                style={{
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "var(--gold)",
                  display: "block",
                }}
              />
              <p className="t-body">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="fade-in"
          style={{
            marginTop: "6rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ink)",
              lineHeight: 1.5,
              maxWidth: "38ch",
              margin: "0 auto",
            }}
          >
            "The measure of a concierge is not what they promise —
            it is what they{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal", fontWeight: 500 }}>
              deliver.
            </span>
            "
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
