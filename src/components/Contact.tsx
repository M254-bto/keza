"use client";

import { useState } from "react";

const urgencyOptions = ["Standard (3–5 days)", "Priority (24–48 hrs)", "Urgent (same day)", "Ongoing / Retainer"];
const natureOptions = [
  "Property / Asset Verification",
  "Errand & Task Execution",
  "Family / Welfare Check-In",
  "Procurement & Logistics",
  "Business Support",
  "Emergency Task",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    nature: "",
    urgency: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "8rem 2rem",
      }}
    >
      <div className="container">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left: info */}
          <div>
            <span className="t-label fade-in" style={{ display: "block", marginBottom: "1.5rem" }}>
              Get in Touch
            </span>
            <h2
              className="t-h1 fade-in fade-in-delay-1"
              style={{ color: "var(--white)", marginBottom: "2rem" }}
            >
              Begin a Request
            </h2>
            <span className="gold-rule fade-in fade-in-delay-2" style={{ marginBottom: "2.5rem", display: "block" }} />
            <p
              className="fade-in fade-in-delay-3"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Tell us what you need and we will structure the appropriate
              engagement for you. Responses within 4 business hours.
            </p>

            {/* Contact details */}
            <div
              className="fade-in fade-in-delay-3"
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {[
                { label: "WhatsApp", value: "+254 768 512 338", href: "https://wa.me/254768512338" },
                { label: "Email", value: "kezaconciergeglobal@gmail.com", href: "mailto:kezaconciergeglobal@gmail.com" },
                { label: "Country", value: "Kenya (On-ground operations)" },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254768512338"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary fade-in"
              style={{ marginTop: "3rem", display: "inline-flex" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="fade-in fade-in-delay-2">
            {submitted ? (
              <div
                style={{
                  padding: "4rem",
                  border: "1px solid rgba(184,151,90,0.3)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "3rem",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  ✓
                </span>
                <h3 className="t-h3" style={{ color: "var(--white)", marginBottom: "1rem" }}>
                  Request received.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  We will review your request and respond within 4 business hours.
                  For urgent matters, please reach us directly on WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Name */}
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>

                {/* Contact */}
                <div>
                  <label style={labelStyle}>Email or WhatsApp Number</label>
                  <input
                    id="contact-email"
                    name="contact"
                    type="text"
                    required
                    placeholder="email@example.com or +254..."
                    value={form.contact}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>

                {/* Nature */}
                <div>
                  <label style={labelStyle}>Nature of Request</label>
                  <select
                    id="contact-nature"
                    name="nature"
                    required
                    value={form.nature}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    <option value="" disabled>Select request type</option>
                    {natureOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label style={labelStyle}>Urgency</label>
                  <select
                    id="contact-urgency"
                    name="urgency"
                    required
                    value={form.urgency}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    <option value="" disabled>Select urgency level</option>
                    {urgencyOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Additional Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe what you need handled..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 540px) {
          #contact .btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.65rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "0.6rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "0.9rem 1rem",
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "var(--white)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.25s ease",
  appearance: "none",
};
