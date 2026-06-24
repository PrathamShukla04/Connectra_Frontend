import { useEffect, useRef } from "react";

const CancellationPolicy = () => {
  const rootRef = useRef(null);

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
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Policy
          </span>

          <h1 className="mt-4 text-4xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Cancellation Policy
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Learn about how and when you can cancel your orders or subscriptions.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">

          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">Cancellation Window</p>
            <p className="text-blue-300 font-medium">
              Orders can be cancelled within 24 hours of purchase.
            </p>
          </div>

          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">After 24 Hours</p>
            <p className="text-purple-300 font-medium">
              Requests after 24 hours may not be eligible for cancellation.
            </p>
          </div>

          <div className="p-5 rounded-xl hover:bg-white/5 transition">
            <p className="text-sm text-indigo-200/50">Service-Based Orders</p>
            <p className="text-pink-300 font-medium">
              Once a service has been started or delivered, cancellation is not possible.
            </p>
          </div>

        </div>

        <div className="mt-10 text-center text-xs text-indigo-200/40">
          © 2026 DevBridge
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;