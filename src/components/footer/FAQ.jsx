import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "You can sign up using your email by visiting the signup page and filling in your details.",
  },
  {
    question: "How long does delivery take?",
    answer: "Since we provide digital services, delivery usually happens within 1 hour after payment.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds are processed based on our refund policy within 5–7 business days.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard security practices to keep your data safe and protected.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to us anytime at support@connectra.com.",
  },
];

const FAQ = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Track open FAQ index
  const [openIndex, setOpenIndex] = useState(null);

  // 🔹 Generate stars
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.className =
        "absolute w-[2px] h-[2px] bg-white/40 rounded-full";

      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      root.appendChild(star);
    }
  }, []);

  // 🔹 Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0820] via-[#12104a] to-[#05030f] text-white px-6 py-20 relative overflow-hidden"
    >
      {/* 🔹 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* 🔹 Container */}
      <div className="max-w-3xl mx-auto relative z-10">

        {/* 🔹 Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Support
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Find answers to the most common questions about our platform and services.
          </p>
        </div>

        {/* 🔹 FAQ List */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              {/* 🔹 Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-white/5 transition"
              >
                <span className="text-sm font-medium text-indigo-200">
                  {faq.question}
                </span>
                <span className="text-indigo-300 text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* 🔹 Answer */}
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-indigo-200/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* 🔹 Footer CTA */}
        <div className="mt-10 text-center text-sm text-indigo-200/60">
          Still have questions?{" "}
          <span className="text-indigo-300 font-medium">
            support@connectra.com
          </span>
        </div>

      </div>
    </div>
  );
};

export default FAQ;