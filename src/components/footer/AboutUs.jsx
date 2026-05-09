import { useEffect, useRef } from "react";

const AboutUs = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Generate subtle stars
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
            About
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            About Connectra
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Learn more about who we are, what we do, and why we built Connectra.
          </p>
        </div>

        {/* 🔹 Content Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-8">

          {/* 🔹 Intro */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Who We Are
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              Connectra is a modern digital platform designed to bring people
              closer through seamless connections, communication, and services.
              Our goal is to simplify digital interactions and create a smooth
              user experience for everyone.
            </p>
          </div>

          {/* 🔹 Mission */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Our Mission
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              We aim to build a reliable and user-friendly platform where users
              can connect, explore, and grow. Our mission is to deliver value
              through innovation, simplicity, and trust.
            </p>
          </div>

          {/* 🔹 Vision */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Our Vision
            </h2>
            <p className="text-indigo-200/70 text-sm leading-relaxed">
              Our vision is to become a leading digital platform that empowers
              users globally by offering secure, fast, and intuitive solutions.
            </p>
          </div>

          {/* 🔹 Why Choose Us */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              Why Choose Us
            </h2>

            <ul className="list-disc list-inside text-indigo-200/70 text-sm space-y-2">
              <li>Simple and intuitive user experience</li>
              <li>Secure and reliable platform</li>
              <li>Fast digital delivery of services</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>

          {/* 🔹 Contact CTA */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-indigo-200/60 text-sm">
              Have questions or want to collaborate?
            </p>
            <p className="text-indigo-300 font-medium mt-1">
              support@connectra.com
            </p>
          </div>

        </div>

        {/* 🔹 Footer */}
        <div className="mt-10 text-center text-xs text-indigo-200/40">
          © 2026 Connectra · Building better connections
        </div>

      </div>
    </div>
  );
};

export default AboutUs;