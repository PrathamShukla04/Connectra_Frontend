import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserRound, Users, UserPlus2, Video,
  Gem, Newspaper, LogOut, Settings, ChevronDown,
} from "lucide-react";

const NAV_LINKS = [
  { to: "/profile",          label: "Profile",     icon: UserRound },
  { to: "/connections", label: "Connections", icon: Users },
  { to: "/requests",         label: "Requests",    icon: UserPlus2 },
  { to: "/premium",          label: "Premium",     icon: Gem },
  { to: "/tech-news",        label: "Tech News",   icon: Newspaper },
];

const Navbar = () => {
  const user     = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [open,       setOpen]       = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        /* Active nav link underline */
        .cnav-link-active::after {
          content: '';
          position: absolute; bottom: -1px; left: 14px; right: 14px;
          height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }

        /* Hamburger open transforms */
        .ham-open .ham-line-1 { transform: translateY(7px) rotate(45deg); }
        .ham-open .ham-line-2 { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-line-3 { transform: translateY(-7px) rotate(-45deg); }
      `}</style>

      <nav
        className="sticky top-0 z-[100] transition-all duration-300 border-b border-white/[0.06] backdrop-blur-xl"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: scrolled ? "rgba(6,6,20,0.92)" : "rgba(6,6,20,0.75)",
          boxShadow: scrolled
            ? "0 0 0 1px rgba(99,102,241,0.1), 0 8px 32px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        {/* Inner */}
        <div className="max-w-[1280px] mx-auto px-7 h-[62px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/feed" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <div
              className="w-8 h-8 rounded-[10px] flex items-center justify-center flex-shrink-0 text-white text-[15px] font-extrabold"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 16px rgba(99,102,241,0.45)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              C
            </div>
            <span
              className="text-[18px] font-extrabold text-white tracking-[-0.5px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Connectra
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3.5 py-[7px] rounded-[10px] no-underline text-[13px] font-medium transition-all duration-200 whitespace-nowrap relative
                  ${isActive(to)
                    ? "cnav-link-active text-[#a5b4fc] bg-[rgba(99,102,241,0.12)]"
                    : "text-slate-400/70 hover:text-slate-200 hover:bg-white/[0.05]"
                  }`}
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </div>

          {/* Right area */}
          <div className="flex items-center gap-2.5 flex-shrink-0">

            {/* Avatar + dropdown */}
            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center gap-2.5 border border-white/10 rounded-xl px-2.5 py-[5px] pl-[5px] cursor-pointer transition-all duration-200 hover:border-[rgba(99,102,241,0.3)]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => setOpen(!open)}
                >
                  {/* Avatar image with online dot */}
                  <div className="relative">
                    <img
                      className="w-8 h-8 rounded-lg object-cover border border-white/[0.12]"
                      src={user.photoUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      alt={user.firstName}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-[9px] h-[9px] rounded-full bg-emerald-400"
                      style={{ border: "2px solid rgba(6,6,20,1)" }}
                    />
                  </div>

                  <span className="hidden sm:block text-[13px] font-semibold text-slate-200 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {user.firstName}
                  </span>

                  <ChevronDown
                    size={13}
                    className="text-slate-400/50 transition-transform duration-[250ms]"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      className="absolute right-0 top-[calc(100%+10px)] w-[220px] rounded-[18px] overflow-hidden p-2 border border-white/[0.08] backdrop-blur-2xl"
                      style={{
                        background: "rgba(10,10,30,0.96)",
                        boxShadow:
                          "0 0 0 1px rgba(99,102,241,0.12), 0 24px 48px rgba(0,0,0,0.55)",
                      }}
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* Header */}
                      <div className="px-3 pt-2.5 pb-3 border-b border-white/[0.06] mb-1.5">
                        <div
                          className="text-[14px] font-bold text-slate-200 tracking-[-0.3px]"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-[11px] mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: "rgba(148,163,184,0.45)" }}>
                          {user.emailId || "connectra member"}
                        </div>
                      </div>

                      {NAV_LINKS.map(({ to, label, icon: Icon }) => (
                        <Link
                          key={to}
                          to={to}
                          className={`flex items-center gap-2.5 px-3 py-[9px] rounded-[10px] no-underline text-[13px] font-medium transition-all duration-150 w-full
                            ${isActive(to)
                              ? "text-[#a5b4fc] bg-[rgba(99,102,241,0.1)]"
                              : "text-slate-400/75 hover:text-slate-200 hover:bg-white/[0.05]"
                            }`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                          onClick={() => setOpen(false)}
                        >
                          <Icon size={14} />
                          {label}
                        </Link>
                      ))}

                      <div className="h-px my-1.5" style={{ background: "rgba(255,255,255,0.06)" }} />

                      <button
                        className="flex items-center gap-2.5 px-3 py-[9px] rounded-[10px] text-[13px] font-medium w-full text-left border-none bg-transparent cursor-pointer transition-all duration-150"
                        style={{
                          color: "rgba(252,165,165,0.7)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#fca5a5";
                          e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(252,165,165,0.7)";
                          e.currentTarget.style.background = "transparent";
                        }}
                        onClick={handleLogout}
                      >
                        <LogOut size={14} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              className={`flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ${mobileMenu ? "ham-open" : ""}`}
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Menu"
            >
              <div className="ham-line-1 w-5 h-0.5 rounded-sm bg-slate-400/70 transition-all duration-[250ms]" />
              <div className="ham-line-2 w-5 h-0.5 rounded-sm bg-slate-400/70 transition-all duration-[250ms]" />
              <div className="ham-line-3 w-5 h-0.5 rounded-sm bg-slate-400/70 transition-all duration-[250ms]" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              className="border-t border-white/[0.06] flex flex-col gap-1 px-4 pt-3 pb-5 backdrop-blur-xl"
              style={{ background: "rgba(6,6,20,0.97)" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_LINKS.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-2.5 px-3.5 py-[11px] rounded-xl no-underline text-[14px] font-medium transition-all duration-150
                    ${isActive(to)
                      ? "text-[#a5b4fc] bg-[rgba(99,102,241,0.1)]"
                      : "text-slate-400/75 hover:text-slate-200 hover:bg-white/[0.05]"
                    }`}
                  onClick={() => setMobileMenu(false)}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              ))}

              <div className="h-px my-1.5" style={{ background: "rgba(255,255,255,0.06)" }} />

              <button
                className="flex items-center gap-2.5 px-3.5 py-[11px] rounded-xl text-[14px] font-medium border-none bg-transparent cursor-pointer w-full text-left transition-all duration-150"
                style={{
                  color: "rgba(252,165,165,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fca5a5";
                  e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(252,165,165,0.7)";
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={handleLogout}
              >
                <LogOut size={15} />
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;