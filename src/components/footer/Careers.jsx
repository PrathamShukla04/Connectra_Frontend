import { useEffect, useRef } from "react";

// 🔹 Dummy job data (later backend se replace kar sakte ho)
const jobs = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    type: "Part-time",
    location: "Hybrid",
  },
];

const Careers = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

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
            Careers
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Join Our Team
          </h1>

          <p className="mt-4 text-indigo-200/60 text-sm max-w-md mx-auto">
            We are always looking for talented people to help us build amazing experiences.
          </p>
        </div>

        {/* 🔹 Job Listings */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 border border-white/10 rounded-xl hover:bg-white/5 transition"
            >
              {/* 🔹 Job Info */}
              <div>
                <h2 className="text-indigo-200 font-medium">
                  {job.title}
                </h2>
                <p className="text-xs text-indigo-200/50 mt-1">
                  {job.type} • {job.location}
                </p>
              </div>

              {/* 🔹 Apply Button */}
              <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition">
                Apply Now →
              </button>
            </div>
          ))}

        </div>

        {/* 🔹 Footer CTA */}
        <div className="mt-10 text-center text-sm text-indigo-200/60">
          Didn’t find a role? Reach out at{" "}
          <span className="text-indigo-300 font-medium">
            careers@connectra.com
          </span>
        </div>

      </div>
    </div>
  );
};

export default Careers;