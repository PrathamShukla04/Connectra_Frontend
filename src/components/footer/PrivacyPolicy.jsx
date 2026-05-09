import { useEffect, useRef } from "react";

const PrivacyPolicy = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Generate subtle background stars
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
    <main
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
            Legal
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Privacy Policy
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Your privacy is important to us. This policy explains how we collect and use your information.
          </p>
        </div>

        {/* 🔹 Content Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">

          {/* 🔹 Intro */}
          <p className="text-indigo-200/70 leading-relaxed text-sm md:text-base">
            At Connectra, we respect your privacy and are committed to protecting your personal data.
            This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          {/* 🔹 Section 1 */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Information We Collect
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              We may collect personal details such as your name, email address,
              and usage data to improve our services and user experience.
            </p>
          </div>

          {/* 🔹 Section 2 */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              How We Use Your Information
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              Your information is used to provide services, process transactions,
              enhance functionality, and communicate important updates.
            </p>
          </div>

          {/* 🔹 Section 3 */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Data Protection
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              We implement appropriate security measures to protect your data
              from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* 🔹 Section 4 */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Your Rights
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              You have the right to access, update, or delete your personal data.
              You can contact us anytime for such requests.
            </p>
          </div>

          {/* 🔹 Footer Note */}
          <div className="pt-4 border-t border-white/10 text-xs text-indigo-200/40">
            Last updated: July 2026
          </div>

        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;