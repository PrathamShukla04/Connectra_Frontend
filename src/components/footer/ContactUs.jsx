import { useEffect, useRef, useState } from "react";

const ContactUs = () => {
  // 🔹 Ref for background stars
  const rootRef = useRef(null);

  // 🔹 Form state (user inputs)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔹 Create background stars
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

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 For now (later connect backend)
    console.log("Contact Form:", form);

    alert("Message sent successfully 🚀");

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

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
        <div className="mb-12 text-center">
          <span className="inline-block text-xs tracking-widest uppercase text-indigo-300 bg-indigo-500/10 px-4 py-1 rounded-full border border-indigo-400/20">
            Contact
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Get in Touch
          </h1>

          <p className="mt-4 text-indigo-200/60 max-w-md mx-auto text-sm">
            Have questions, feedback, or need support? Fill out the form below and our team will get back to you.
          </p>
        </div>

        {/* 🔹 Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">

          {/* 🔹 Contact Info */}
          <div className="space-y-4">

            {/* Email */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-lg">
                ✉️
              </div>
              <div>
                <p className="text-sm text-indigo-200/50">Email</p>
                <p className="text-blue-300 font-medium">
                  support@connectra.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg">
                📞
              </div>
              <div>
                <p className="text-sm text-indigo-200/50">Phone</p>
                <p className="text-purple-300 font-medium">
                  +91-9876543210
                </p>
              </div>
            </div>

          </div>

          {/* 🔥 CONTACT FORM */}
          <div className="border-t border-white/10 pt-6">

            <h2 className="text-lg font-semibold text-indigo-300 mb-4">
              💬 Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-400 outline-none text-sm"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-400 outline-none text-sm"
              />

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-400 outline-none text-sm resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 font-medium hover:scale-[1.02] transition"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>

        {/* 🔹 Footer */}
        <div className="mt-10 text-center text-xs text-indigo-200/40">
          © 2026 Connectra · We usually reply within 24 hours
        </div>
      </div>
    </div>
  );
};

export default ContactUs;