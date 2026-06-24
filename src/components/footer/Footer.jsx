import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log("Entered Code:", code);
    if (code === "DEVBRIDGE2026") {
      alert("Valid Code ✅");
    } else {
      alert("Invalid Code ❌");
    }
    setOpenModal(false);
    setCode("");
  };

  return (
    <>
      <footer
        className="relative text-gray-300 py-12 px-6 md:px-20 border-t border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0820 0%, #12104a 50%, #05030f 100%)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Background Glows */}
        <div className="absolute rounded-full pointer-events-none"
          style={{ top: -80, left: -80, width: 288, height: 288, background: "rgba(99,102,241,0.18)", filter: "blur(90px)" }}
        />
        <div className="absolute rounded-full pointer-events-none"
          style={{ bottom: -80, right: -80, width: 288, height: 288, background: "rgba(139,92,246,0.18)", filter: "blur(90px)" }}
        />

        <div className="relative max-w-6xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <div
              className="flex items-center justify-center font-extrabold text-white text-base rounded-lg"
              style={{ width: 36, height: 36, background: "#6c63ff" }}
            >
              D
            </div>
            <span className="text-xl font-bold text-white">
              Dev<span style={{ color: "#a78bfa" }}>Bridge</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-10">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF />, hover: "#1d4ed8" },
              { href: "https://instagram.com", icon: <FaInstagram />, hover: "#db2777" },
              { href: "https://twitter.com", icon: <FaTwitter />, hover: "#38bdf8" },
              { href: "https://youtube.com", icon: <FaYoutube />, hover: "#dc2626" },
            ].map(({ href, icon, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hover;
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm text-center">
            <ul className="space-y-3">
              <li><Link to="/terms-and-conditions" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Privacy Policy</Link></li>
              <li><Link to="/contact-us" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Contact Us</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link to="/cancellation-and-refund-policy" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Cancellation</Link></li>
              <li><Link to="/shipping-and-delivery-policy" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Shipping</Link></li>
              <li><Link to="/media-centre" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Media Centre</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link to="/refund-policy" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Refund Policy</Link></li>
              <li><Link to="/delivery-policy" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Delivery Policy</Link></li>
              <li><Link to="/about-us" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">About Us</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link to="/faq" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">FAQ</Link></li>
              <li><Link to="/support" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Support</Link></li>
              <li><Link to="/careers" style={{ color: "rgba(165,180,252,0.65)" }} className="hover:text-purple-300 transition">Careers</Link></li>
            </ul>
          </div>

          {/* Service Code Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setOpenModal(true)}
              className="px-6 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200 shadow-lg"
              style={{ background: "linear-gradient(90deg, #6c63ff, #a78bfa)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Service Code
            </button>
          </div>

          <div className="my-8" style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

          <div className="text-center text-xs" style={{ color: "rgba(165,180,252,0.4)" }}>
            © 2026 DevBridge. All rights reserved.
          </div>

        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(0,0,0,0.65)" }}>
          <div
            className="w-full max-w-md text-center rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, #0a0820, #12104a)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Enter Service Code</h2>

            <input
              type="text"
              placeholder="Enter your code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-white outline-none mb-4"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            />

            <div className="flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 py-2 rounded-lg transition"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(165,180,252,0.7)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-2 rounded-lg text-white transition"
                style={{ background: "#6c63ff" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#5b53ee"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#6c63ff"; }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;