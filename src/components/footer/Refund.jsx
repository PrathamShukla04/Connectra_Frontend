import { useEffect, useRef } from "react";

const RefundPolicy = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Generate stars
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.className = "absolute w-[2px] h-[2px] bg-white/40 rounded-full";
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
      {/* 🔹 Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* 🔹 Container */}
      <div className="max-w-3xl mx-auto relative z-10">

        {/* 🔹 Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Policy
          </span>

          <h1 className="mt-4 text-4xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Refund Policy
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Understand how refunds are processed and when you are eligible.
          </p>
        </div>

        {/* 🔹 Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">

          {/* Rule 1 */}
          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">Processing Time</p>
            <p className="text-purple-300 font-medium">
              Refunds are processed within 5–7 business days.
            </p>
          </div>

          {/* Rule 2 */}
          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">Payment Method</p>
            <p className="text-blue-300 font-medium">
              Refunds are credited to the original payment method.
            </p>
          </div>

          {/* Rule 3 */}
          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">Non-Refundable Cases</p>
            <p className="text-pink-300 font-medium">
              No refunds for used services, digital goods, or policy violations.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-indigo-200/40">
          © 2026 Connectra
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;