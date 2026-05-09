import { useEffect, useRef } from "react";

const Support = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Generate background stars
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

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0820] via-[#12104a] to-[#05030f] text-white px-6 py-20 relative overflow-hidden"
    >
      {/* 🔹 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* 🔹 Container */}
      <div className="max-w-4xl mx-auto relative z-10">

        {/* 🔹 Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Support
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            How can we help?
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Find answers, contact support, or explore helpful resources.
          </p>
        </div>

        {/* 🔹 Support Options */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* 🔹 FAQ */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition">
            <h2 className="text-indigo-300 font-semibold mb-2">
              📖 FAQ
            </h2>
            <p className="text-indigo-200/60 text-sm mb-4">
              Browse common questions and answers.
            </p>
            <a
              href="/faq"
              className="text-sm text-indigo-400 hover:underline"
            >
              Go to FAQ →
            </a>
          </div>

          {/* 🔹 Email Support */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition">
            <h2 className="text-indigo-300 font-semibold mb-2">
              ✉️ Email Support
            </h2>
            <p className="text-indigo-200/60 text-sm mb-4">
              Reach out to our team anytime.
            </p>
            <p className="text-indigo-300 font-medium">
              support@connectra.com
            </p>
          </div>

          {/* 🔹 Live Chat (UI only) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition">
            <h2 className="text-indigo-300 font-semibold mb-2">
              💬 Live Chat
            </h2>
            <p className="text-indigo-200/60 text-sm mb-4">
              Chat with our support team in real-time.
            </p>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition">
              Start Chat →
            </button>
          </div>

        </div>

        {/* 🔹 Extra Help Section */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-indigo-200/60 text-sm">
            Still need help? Our team usually responds within 24 hours.
          </p>
          <p className="text-indigo-300 font-medium mt-2">
            support@connectra.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Support;