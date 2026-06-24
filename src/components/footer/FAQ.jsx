import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "You can sign up using your email by visiting the signup page and filling in your details.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Since we provide digital services, delivery usually happens within 1 hour after payment.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are processed based on our refund policy within 5–7 business days.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security practices to keep your data safe and protected.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to us anytime at support@devbridge.com.",
  },
];

const FAQ = () => {
  const rootRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Generate background stars
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255,255,255,0.35);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
      `;
      root.appendChild(star);
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={rootRef}
      className="min-h-screen text-white px-6 py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0820 0%, #12104a 50%, #05030f 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Glows */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -80,
          left: -80,
          width: 320,
          height: 320,
          background: "rgba(99,102,241,0.18)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: -100,
          right: -100,
          width: 320,
          height: 320,
          background: "rgba(139,92,246,0.18)",
          filter: "blur(90px)",
        }}
      />

      {/* Main Container */}
      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#a5b4fc",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(165,180,252,0.2)",
              borderRadius: 20,
              padding: "4px 14px",
              display: "inline-block",
              marginBottom: 16,
              letterSpacing: "0.12em",
            }}
          >
            Support
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{
              lineHeight: 1.15,
              background:
                "linear-gradient(90deg, #c7d2fe, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: 10,
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            className="text-sm max-w-sm mx-auto"
            style={{ color: "rgba(165,180,252,0.55)", lineHeight: 1.6 }}
          >
            Find answers to the most common questions about DevBridge
            platform and services.
          </p>
        </div>

        {/* FAQ Card */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.09)" }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left transition-all"
                style={{
                  background:
                    openIndex === index
                      ? "rgba(108,99,255,0.12)"
                      : "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(108,99,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    openIndex === index
                      ? "rgba(108,99,255,0.12)"
                      : "transparent";
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "#c7d2fe" }}
                >
                  {faq.question}
                </span>
                <span
                  className="text-lg"
                  style={{
                    color: "#818cf8",
                    display: "inline-block",
                    transition: "transform 0.25s",
                    transform:
                      openIndex === index
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    minWidth: 22,
                    textAlign: "center",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div
                  className="px-4 pb-4 text-sm"
                  style={{
                    color: "rgba(165,180,252,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="mt-8 text-center text-sm"
          style={{ color: "rgba(165,180,252,0.5)" }}
        >
          Still have questions?{" "}
          <span
            className="font-semibold"
            style={{ color: "#a78bfa" }}
          >
            support@devbridge.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;