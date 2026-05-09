import { useEffect, useRef } from "react";

const MediaCentre = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Create subtle star background
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

      {/* 🔹 Main Container */}
      <div className="max-w-3xl mx-auto relative z-10">

        {/* 🔹 Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Media Centre
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Stay in the Loop
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            Discover our latest updates, press releases, and official resources for media and partners.
          </p>
        </div>

        {/* 🔹 Content Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">

          {/* 🔹 Press Releases */}
          <div className="flex gap-4 p-5 rounded-xl hover:bg-white/5 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-lg">
              📰
            </div>
            <div>
              <p className="text-sm text-indigo-200/50">Press Releases</p>
              <p className="text-blue-300 font-medium">
                Stay updated with our latest announcements and company news.
              </p>
              <p className="text-xs text-indigo-200/40 mt-1">
                Latest update: July 2026
              </p>
            </div>
          </div>

          {/* 🔹 Media Resources */}
          <div className="flex gap-4 p-5 rounded-xl hover:bg-white/5 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg">
              🎨
            </div>
            <div>
              <p className="text-sm text-indigo-200/50">Media Resources</p>
              <p className="text-purple-300 font-medium">
                Access brand assets, logos, and guidelines.
              </p>
              <p className="text-xs text-indigo-200/40 mt-1">
                Brand kit available
              </p>
            </div>
          </div>

          {/* 🔹 Media Contact */}
          <div className="flex gap-4 p-5 rounded-xl hover:bg-white/5 transition">
            <div className="w-10 h-10 flex items-center justify-center bg-pink-500/20 rounded-lg">
              ✉️
            </div>
            <div>
              <p className="text-sm text-indigo-200/50">Media Contact</p>
              <a
                href="mailto:press@connectra.com"
                className="text-pink-300 font-medium hover:underline"
              >
                press@connectra.com
              </a>
              <p className="text-xs text-indigo-200/40 mt-1">
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* 🔹 CTA Button */}
          <div className="pt-4 text-center">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-medium hover:scale-105 transition shadow-lg">
              Contact Press Team →
            </button>
          </div>

        </div>

        {/* 🔹 Footer */}
        <div className="mt-10 text-center text-xs text-indigo-200/40">
          © 2026 Connectra · Media updates regularly
        </div>
      </div>
    </div>
  );
};

export default MediaCentre;