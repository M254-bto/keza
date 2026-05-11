"use client";

import Link from "next/link";

const tiers = [
  {
    id: "core",
    name: "Keza Core",
    subtitle: "Basic Help",
    tagline: "For individuals who need occasional help.",
    limit: "Up to 5 tasks/month",
    updates: "Basic written updates",
    speed: "Standard",
    featured: false,
    features: [
      "Basic errands",
      "Standard delivery coordination",
      "Simple follow-ups",
      "Non-urgent tasks",
    ],
  },
  {
    id: "select",
    name: "Keza Select",
    subtitle: "Professional Tier",
    tagline: "For busy professionals and business owners.",
    limit: "Up to 10-15 tasks monthly",
    updates: "Live updates with photos, videos & receipts",
    speed: "Priority handling",
    featured: false,
    features: [
      "Everything in Core",
      "Govt paperwork follow-ups",
      "Banking and admin errands",
      "Buy-for-me service (storage & delivery)",
    ],
  },
  {
    id: "elite",
    name: "Keza Elite",
    subtitle: "Premium Tier",
    tagline: "Premium tier for high-net-worth clients, diaspora clients, executives, and property owners.",
    limit: "Unlimited tasks",
    updates: "Real-time, full-scope documentation",
    speed: "Immediate — same-day execution",
    featured: true,
    features: [
      "Everything in Select",
      "Verification services (property & asset checks)",
      "On-ground inspections",
      "Confidential errands",
    ],
  },
];

const signature = {
  name: "Keza Signature",
  subtitle: "Family Matters & Retainer",
  tagline:
    "Monthly check-ins, family care, and priority handling — structured for those who need Keza on permanent standby for family matters.",
  features: [
    "Monthly property check-ins",
    "Regular family welfare check-ins",
    "Ongoing errand management",
    "Dedicated communication line",
    "Priority handling across all requests",
  ],
};

export default function Packages() {
  return (
    <section
      id="packages"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "8rem 2rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "5rem",
          }}
        >
          <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
            Service Tiers
          </span>
          <h2
            className="t-h1 fade-in fade-in-delay-1"
            style={{ color: "var(--ink)", marginBottom: "1.5rem", maxWidth: "28ch" }}
          >
            Structured around how much you want handled — and{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>how fast.</span>
          </h2>
          <span className="gold-rule fade-in fade-in-delay-2" />
          <p
            className="t-body fade-in fade-in-delay-3"
            style={{ marginTop: "2rem", maxWidth: "54ch" }}
          >
            Pricing is structured according to scope, urgency, complexity, logistics and
            risk level. The appropriate tier will be recommended based on your request.
          </p>
        </div>

        {/* Tier cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className={`fade-in fade-in-delay-${i + 1} pkg-card`}
              style={{
                padding: "3rem",
                backgroundColor: tier.featured ? "var(--charcoal)" : "var(--white)",
                border: tier.featured ? "1px solid var(--gold)" : "1px solid var(--smoke)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Popular badge */}
              {tier.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: "var(--gold)",
                    color: "var(--white)",
                    padding: "0.3rem 0.7rem",
                  }}
                >
                  Most Popular
                </span>
              )}

              {/* Tier name */}
              <span
                className="t-label"
                style={{
                  color: tier.featured ? "var(--gold)" : "var(--gold)",
                  marginBottom: "0.5rem",
                  display: "block",
                }}
              >
                {tier.subtitle}
              </span>
              <h3
                className="t-h2"
                style={{
                  color: tier.featured ? "var(--white)" : "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                {tier.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: tier.featured ? "rgba(255,255,255,0.55)" : "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: "2rem",
                }}
              >
                {tier.tagline}
              </p>

              {/* Divider */}
              <div
                style={{
                  borderTop: tier.featured
                    ? "1px solid rgba(184,151,90,0.25)"
                    : "1px solid var(--smoke)",
                  marginBottom: "2rem",
                }}
              />

              {/* Meta info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  { label: "Tasks", value: tier.limit },
                  { label: "Updates", value: tier.updates },
                  { label: "Speed", value: tier.speed },
                ].map((m) => (
                  <div key={m.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        minWidth: "64px",
                        paddingTop: "2px",
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--muted-dark)",
                        lineHeight: 1.5,
                      }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2.5rem", flex: 1 }}>
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: tier.featured ? "rgba(255,255,255,0.65)" : "var(--muted-dark)",
                    }}
                  >
                    <span style={{ color: "var(--gold)", flexShrink: 0, lineHeight: 1.6 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={tier.featured ? "btn-primary" : "btn-outline"}
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>

        {/* Signature card */}
        <div
          className="fade-in signature-card"
          style={{
            padding: "3rem",
            backgroundColor: "var(--gold-pale)",
            border: "1px solid rgba(184,151,90,0.3)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "span 1" }}>
            <span className="t-label" style={{ display: "block", marginBottom: "0.75rem" }}>
              Ongoing Retainer
            </span>
            <h3 className="t-h2" style={{ color: "var(--ink)" }}>
              {signature.name}
            </h3>
          </div>
          <div style={{ gridColumn: "span 1" }}>
            <p className="t-body" style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              {signature.tagline}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {signature.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--muted-dark)",
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <Link href="#contact" className="btn-primary">
              Enquire About Signature
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .signature-card {
            grid-template-columns: 1fr !important;
          }
          .signature-card > div:last-child {
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 540px) {
          #packages .pkg-card {
            padding: 2rem !important;
          }
          .signature-card {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
