"use client";

const steps = [
  {
    number: "01",
    title: "You Share the Request",
    body: "Tell us what you need handled — via WhatsApp, email or our form. Include urgency, scope and any relevant context.",
  },
  {
    number: "02",
    title: "We Structure the Engagement",
    body: "We assess scope, complexity, risk and logistics, then present you with the appropriate package, timeline and pricing.",
  },
  {
    number: "03",
    title: "We Execute & Report",
    body: "Our team handles the task on the ground, documenting every step with photos, receipts and signed confirmations delivered directly to you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "var(--ivory-dark)",
        padding: "8rem 2rem",
        borderTop: "1px solid var(--smoke)",
        borderBottom: "1px solid var(--smoke)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          className="process-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            marginBottom: "6rem",
            alignItems: "start",
          }}
        >
          <div>
            <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
              The Process
            </span>
            <h2 className="t-h1 fade-in fade-in-delay-1" style={{ color: "var(--ink)" }}>
              How Keza Works
            </h2>
          </div>
          <p
            className="t-body fade-in fade-in-delay-2"
            style={{
              paddingTop: "3.5rem",
              fontSize: "1.05rem",
              maxWidth: "54ch",
            }}
          >
            Every request is structured according to scope, urgency, complexity, logistics
            and risk level. Pricing follows the engagement — not the other way around.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in fade-in-delay-${i + 1} step-row`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap: "2rem 3rem",
                padding: "3rem 0",
                borderTop: "1px solid var(--smoke)",
                alignItems: "start",
              }}
            >
              {/* Step number */}
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              {/* Title */}
              <h3 className="t-h3" style={{ color: "var(--ink)", paddingTop: "0.25rem" }}>
                {step.title}
              </h3>
              {/* Body */}
              <p className="t-body step-body">{step.body}</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--smoke)" }} />
        </div>

        {/* VIP note */}
        <div
          className="fade-in"
          style={{
            marginTop: "5rem",
            padding: "2rem 2.5rem",
            border: "1px solid var(--gold)",
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--white)",
              backgroundColor: "var(--gold)",
              padding: "0.3rem 0.6rem",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            VIP
          </span>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--muted-dark)",
              lineHeight: 1.7,
            }}
          >
            VIP priority applies when a request disrupts normal operations, requires
            extreme urgency or exceptional resource deployment. Same-day execution with
            a dedicated contact is available under our Elite tier.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-bottom: 3rem !important;
          }
          .process-header p { padding-top: 0 !important; }
        }
        @media (max-width: 700px) {
          .step-row {
            grid-template-columns: 60px 1fr !important;
            gap: 1.5rem 1.5rem !important;
          }
          .step-body { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
