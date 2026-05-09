// // import { useDispatch, useSelector } from 'react-redux';
// // import { addFeed, removeFeed } from "../utils/feedSlice"; // ✅ CHANGED: Import removeFeed
// // import { useEffect, useState } from "react";
// // import UserCard from "./profile/UserCard";
// // import axios from "axios";
// // import { BASE_URL } from '../utils/constants';
// // import {
// //   UserRound,
// //   Users,
// //   Gem,
// //   UserPlus2,
// //   LogOut,
// //   Video,
// //   Newspaper
// // } from "lucide-react";

// // import { Link } from "react-router-dom";

// // const Feed = () => {
// //   const feed = useSelector((store) => store.feed);
// //   const dispatch = useDispatch();
// //   const [searchTerm, setSearchTerm] = useState("");
// //   // ✅ CHANGED: State to manage animations
// //   const [animation, setAnimation] = useState({ id: null, type: '' });

// //   const getFeed = async () => {
// //     try {
// //       const response = await axios.get(BASE_URL + "/feed", {
// //         withCredentials: true,
// //       });
// //       console.log(response.data);
// //      dispatch(addFeed(response.data || []));
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     // Only fetch feed if it's not already populated
// //     if (!feed) {
// //       getFeed();
// //     }
// //   }, [feed]); // ✅ CHANGED: Dependency array

// //   // ✅ CHANGED: Handle actions from the card
// // const handleAction = async (status, userId) => {
// //   try {
// //     // 1️⃣ Trigger animation
// //     setAnimation({
// //       id: userId,
// //       type: status === "ignored" ? "swipe-left" : "swipe-right",
// //     });

// //     // 2️⃣ Call backend
// //     await axios.post(
// //       BASE_URL + "/request/send/" + status + "/" + userId,
// //       {},
// //       { withCredentials: true }
// //     );

// //     // 3️⃣ Remove after animation
// //     setTimeout(() => {
// //       dispatch(removeFeed(userId));
// //       setAnimation({ id: null, type: "" });
// //     }, 300);

// //   } catch (err) {
// //     console.error(err);
// //   }
// // };

// //   if (!feed) return <div className="text-center mt-20">Loading feed...</div>; // Improved loading state

// //   const filteredFeed = (feed || []).filter((user) => {
// //     const fullName = `${user.firstName || ""} ${user.lastName || ""}`.toLowerCase();
// //     return fullName.includes(searchTerm.toLowerCase());
// //   });
// //   return (
// //     <div className="flex w-full min-h-screen bg-gray-100 overflow-hidden">
     
// //       <div className="hidden md:flex flex-col items-center gap-6 p-4 w-[80px] bg-white shadow-md border-r">
// //         <Link to="/profile"><UserRound className="text-blue-500" /></Link>
// //         <Link to="/user/connections"><Users className="text-blue-500" /></Link>
// //         <Link to="/requests"><UserPlus2 className="text-blue-500" /></Link>
// //         <Link to="/video-login"><Video className="text-blue-500" /></Link>
// //         <Link to="/premium"><Gem className="text-blue-500" /></Link>
// //         <Link to="/tech-news"><Newspaper className="text-blue-600" /></Link>
// //         <Link to="/login"><LogOut className="text-blue-500" /></Link>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-50 overflow-hidden px-4 py-6">
// //         {/* Search */}
// //         <div className="w-full max-w-md mb-4">
// //           <input
// //             type="text"
// //             placeholder="Search by name..."
// //             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>

// //         {/* Feed Display */}
// //         {filteredFeed.length === 0 ? (
// //           <div className="text-gray-500 text-center mt-20">
// //             No users found for &quot;{searchTerm}&quot;
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
// //             {filteredFeed.slice(0, 15).map((user) => (
// //               <UserCard
// //                 key={user._id}
// //                 user={user}
// //                 onAction={(status) => handleAction(user._id, status)}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Feed;

// import { useDispatch, useSelector } from "react-redux";
// import { addFeed, removeFeed } from "../utils/feedSlice";
// import { useEffect, useState, useRef } from "react";
// import UserCard from "./profile/UserCard";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search, SlidersHorizontal, Users, Sparkles, X,
// } from "lucide-react";

// /* ── Star canvas ── */
// const StarCanvas = () => {
//   const canvasRef = useRef(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let W = (canvas.width = window.innerWidth);
//     let H = (canvas.height = window.innerHeight);
//     const stars = Array.from({ length: 80 }, () => ({
//       x: Math.random() * W, y: Math.random() * H,
//       r: Math.random() * 1 + 0.2,
//       a: Math.random(),
//       da: (Math.random() - 0.5) * 0.004,
//     }));
//     let raf;
//     const draw = () => {
//       ctx.clearRect(0, 0, W, H);
//       stars.forEach((s) => {
//         s.a += s.da;
//         if (s.a <= 0 || s.a >= 1) s.da *= -1;
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(148,163,255,${s.a * 0.6})`;
//         ctx.fill();
//       });
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
//     window.addEventListener("resize", onResize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
//   }, []);
//   return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
// };

// /* ── Skeleton card ── */
// const SkeletonCard = () => (
//   <div style={{
//     borderRadius: 20, overflow: "hidden",
//     background: "rgba(255,255,255,0.03)",
//     border: "1px solid rgba(255,255,255,0.07)",
//     padding: 0, height: 340,
//     animation: "feedPulse 1.8s ease-in-out infinite",
//   }}>
//     <div style={{ height: 160, background: "rgba(99,102,241,0.06)" }} />
//     <div style={{ padding: "20px 20px 16px" }}>
//       <div style={{ height: 14, borderRadius: 7, background: "rgba(255,255,255,0.07)", marginBottom: 10, width: "60%" }} />
//       <div style={{ height: 10, borderRadius: 5, background: "rgba(255,255,255,0.05)", marginBottom: 7, width: "80%" }} />
//       <div style={{ height: 10, borderRadius: 5, background: "rgba(255,255,255,0.05)", width: "45%" }} />
//       <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
//         <div style={{ flex: 1, height: 36, borderRadius: 10, background: "rgba(99,102,241,0.1)" }} />
//         <div style={{ flex: 1, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.06)" }} />
//       </div>
//     </div>
//   </div>
// );

// const Feed = () => {
//   const feed     = useSelector((store) => store.feed);
//   const dispatch = useDispatch();

//   const [searchTerm,  setSearchTerm]  = useState("");
//   const [animation,   setAnimation]   = useState({ id: null, type: "" });
//   const [loading,     setLoading]     = useState(false);
//   const [filterOpen,  setFilterOpen]  = useState(false);

//   const getFeed = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(BASE_URL + "/feed", { withCredentials: true });
//       dispatch(addFeed(response.data || []));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!feed) getFeed();
//   }, [feed]);

//   const handleAction = async (status, userId) => {
//     try {
//       setAnimation({ id: userId, type: status === "ignored" ? "swipe-left" : "swipe-right" });
//       await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, { withCredentials: true });
//       setTimeout(() => {
//         dispatch(removeFeed(userId));
//         setAnimation({ id: null, type: "" });
//       }, 300);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const filteredFeed = (feed || []).filter((user) => {
//     const fullName = `${user.firstName || ""} ${user.lastName || ""}`.toLowerCase();
//     return fullName.includes(searchTerm.toLowerCase());
//   });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
//         * { box-sizing: border-box; }

//         .feed-root {
//           min-height: 100vh;
//           background: #060614;
//           font-family: 'DM Sans', sans-serif;
//           position: relative;
//           overflow-x: hidden;
//         }
//         .feed-root::before {
//           content: ''; position: fixed; inset: 0;
//           background-image:
//             linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px);
//           background-size: 60px 60px;
//           pointer-events: none; z-index: 0;
//         }

//         .feed-body {
//           position: relative; z-index: 1;
//           max-width: 1280px; margin: 0 auto;
//           padding: 40px 28px 80px;
//         }
//         @media(max-width: 640px){ .feed-body { padding: 28px 16px 60px; } }

//         /* Header */
//         .feed-header {
//           display: flex; align-items: flex-end; justify-content: space-between;
//           margin-bottom: 32px; gap: 16px; flex-wrap: wrap;
//         }
//         .feed-title-wrap {}
//         .feed-eyebrow {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);
//           border-radius: 20px; padding: 3px 10px;
//           font-size: 10px; font-weight: 600; color: #a5b4fc;
//           letter-spacing: 0.1em; text-transform: uppercase;
//           margin-bottom: 10px;
//         }
//         .feed-eyebrow-dot {
//           width: 5px; height: 5px; border-radius: 50%; background: #818cf8;
//           animation: feedDotPulse 2s infinite;
//         }
//         @keyframes feedDotPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
//         .feed-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(24px, 3.5vw, 36px);
//           font-weight: 800; color: #fff;
//           letter-spacing: -1.5px; line-height: 1.1; margin: 0;
//         }
//         .feed-title span {
//           background: linear-gradient(135deg, #818cf8, #a78bfa, #60a5fa);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//         }
//         .feed-subtitle {
//           font-size: 13px; color: rgba(148,163,184,0.5);
//           margin-top: 6px;
//         }

//         /* Search bar */
//         .feed-search-wrap {
//           display: flex; align-items: center; gap: 10px;
//           width: 100%; max-width: 420px;
//         }

//         .feed-search {
//           flex: 1; position: relative;
//         }
//         .feed-search-icon {
//           position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
//           color: rgba(148,163,184,0.4); pointer-events: none;
//         }
//         .feed-search-input {
//           width: 100%; padding: 11px 14px 11px 40px;
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 14px; outline: none;
//           color: #e2e8f0; font-family: 'DM Sans', sans-serif; font-size: 13.5px;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .feed-search-input::placeholder { color: rgba(148,163,184,0.35); }
//         .feed-search-input:focus {
//           border-color: rgba(99,102,241,0.4);
//           box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
//           background: rgba(255,255,255,0.06);
//         }
//         .feed-search-clear {
//           position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
//           background: none; border: none; color: rgba(148,163,184,0.4);
//           cursor: pointer; padding: 2px; display: flex;
//           transition: color 0.2s;
//         }
//         .feed-search-clear:hover { color: rgba(148,163,184,0.8); }

//         /* Stats bar */
//         .feed-stats {
//           display: flex; align-items: center; gap: 20px;
//           margin-bottom: 28px; flex-wrap: wrap;
//         }
//         .feed-stat {
//           display: flex; align-items: center; gap: 7px;
//           font-size: 12px; color: rgba(148,163,184,0.45);
//           font-weight: 500;
//         }
//         .feed-stat-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

//         /* Grid */
//         .feed-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//           gap: 20px;
//         }

//         /* Empty state */
//         .feed-empty {
//           grid-column: 1 / -1;
//           display: flex; flex-direction: column; align-items: center;
//           padding: 80px 20px; text-align: center;
//         }
//         .feed-empty-icon {
//           width: 72px; height: 72px; border-radius: 24px;
//           background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);
//           display: flex; align-items: center; justify-content: center;
//           margin-bottom: 20px;
//         }
//         .feed-empty-title {
//           font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700;
//           color: #e2e8f0; margin-bottom: 8px; letter-spacing: -0.5px;
//         }
//         .feed-empty-sub { font-size: 13.5px; color: rgba(148,163,184,0.45); max-width: 300px; line-height: 1.6; }
//         .feed-empty-btn {
//           margin-top: 24px; padding: 10px 24px;
//           background: linear-gradient(135deg, #6366f1, #8b5cf6);
//           border: none; border-radius: 12px; color: #fff;
//           font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
//           cursor: pointer; box-shadow: 0 0 24px rgba(99,102,241,0.35);
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .feed-empty-btn:hover { transform: translateY(-1px); box-shadow: 0 0 36px rgba(99,102,241,0.5); }

//         /* Glow orbs */
//         .feed-orb {
//           position: fixed; border-radius: 50%;
//           pointer-events: none; filter: blur(80px); z-index: 0;
//         }

//         @keyframes feedPulse {
//           0%,100%{ opacity: 0.5; }
//           50%{ opacity: 1; }
//         }
//       `}</style>

//       <div className="feed-root">
//         <StarCanvas />

//         {/* Glow orbs */}
//         <div className="feed-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)", top: -150, right: -100 }} />
//         <div className="feed-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", bottom: 100, left: -100 }} />

//         <div className="feed-body">

//           {/* ── Header ── */}
//           <div className="feed-header">
//             <div className="feed-title-wrap">
//               <div className="feed-eyebrow">
//                 <span className="feed-eyebrow-dot" />
//                 Discover developers
//               </div>
//               <h1 className="feed-title">
//                 Find your next<br /><span>collaborator</span>
//               </h1>
//               <p className="feed-subtitle">
//                 {filteredFeed.length > 0
//                   ? `${filteredFeed.length} developer${filteredFeed.length !== 1 ? "s" : ""} ready to connect`
//                   : "No developers found"}
//               </p>
//             </div>

//             {/* Search */}
//             <div className="feed-search-wrap">
//               <div className="feed-search">
//                 <span className="feed-search-icon">
//                   <Search size={15} />
//                 </span>
//                 <input
//                   type="text"
//                   className="feed-search-input"
//                   placeholder="Search by name…"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <AnimatePresence>
//                   {searchTerm && (
//                     <motion.button
//                       className="feed-search-clear"
//                       onClick={() => setSearchTerm("")}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.8 }}
//                     >
//                       <X size={13} />
//                     </motion.button>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* ── Stats bar ── */}
//           <div className="feed-stats">
//             <div className="feed-stat">
//               <div className="feed-stat-dot" style={{ background: "#34d399", boxShadow: "0 0 6px #34d399" }} />
//               {(feed || []).length} online now
//             </div>
//             <div className="feed-stat">
//               <div className="feed-stat-dot" style={{ background: "#818cf8" }} />
//               Showing top {Math.min(filteredFeed.length, 15)} matches
//             </div>
//             {searchTerm && (
//               <div className="feed-stat">
//                 <div className="feed-stat-dot" style={{ background: "#f472b6" }} />
//                 Filtered by "{searchTerm}"
//               </div>
//             )}
//           </div>

//           {/* ── Grid ── */}
//           <div className="feed-grid">
//             {loading ? (
//               Array.from({ length: 6 }).map((_, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
//                   <SkeletonCard />
//                 </motion.div>
//               ))
//             ) : filteredFeed.length === 0 ? (
//               <div className="feed-empty">
//                 <div className="feed-empty-icon">
//                   {searchTerm
//                     ? <Search size={28} style={{ color: "#818cf8" }} />
//                     : <Users size={28} style={{ color: "#818cf8" }} />
//                   }
//                 </div>
//                 <div className="feed-empty-title">
//                   {searchTerm ? `No results for "${searchTerm}"` : "You're all caught up!"}
//                 </div>
//                 <p className="feed-empty-sub">
//                   {searchTerm
//                     ? "Try a different name or clear the search to browse all developers."
//                     : "You've reviewed everyone in your feed. Check back later for new developers."}
//                 </p>
//                 {searchTerm && (
//                   <button className="feed-empty-btn" onClick={() => setSearchTerm("")}>
//                     Clear search
//                   </button>
//                 )}
//               </div>
//             ) : (
//               filteredFeed.slice(0, 15).map((user, i) => (
//                 <motion.div
//                   key={user._id}
//                   initial={{ opacity: 0, y: 24 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ delay: i * 0.05, type: "spring", stiffness: 80, damping: 14 }}
//                   layout
//                 >
//                   <UserCard
//                     user={user}
//                     onAction={(status) => handleAction(status, user._id)}
//                   />
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Feed;


import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeFeed } from "../utils/feedSlice";
import { useEffect, useState, useRef } from "react";
import UserCard from "./profile/UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, Users, Sun, Moon, Sparkles, Star,
  Code2, Globe, Cpu, Layers, Filter, ChevronDown,
  TrendingUp, Zap,
} from "lucide-react";

/* ──────────────────────────────────────────
   Star canvas (same as original)
────────────────────────────────────────── */
const StarCanvas = ({ dark }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.003,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      if (dark) {
        stars.forEach((s) => {
          s.a = Math.max(0, Math.min(1, s.a + s.da));
          if (s.a <= 0 || s.a >= 1) s.da *= -1;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148,163,255,${s.a * 0.55})`;
          ctx.fill();
        });
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [dark]);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
};

/* ──────────────────────────────────────────
   Skeleton card
────────────────────────────────────────── */
const SkeletonCard = ({ dark }) => (
  <div style={{
    borderRadius: 20, overflow: "hidden",
    background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
    border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
    height: 380,
    animation: "skPulse 1.8s ease-in-out infinite",
  }}>
    <div style={{ height: 160, background: dark ? "rgba(99,102,241,0.07)" : "rgba(99,102,241,0.06)" }} />
    <div style={{ padding: "20px 20px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: dark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.1)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 13, borderRadius: 6, background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", marginBottom: 8, width: "65%" }} />
          <div style={{ height: 10, borderRadius: 5, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", width: "45%" }} />
        </div>
      </div>
      <div style={{ height: 10, borderRadius: 5, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", marginBottom: 7, width: "90%" }} />
      <div style={{ height: 10, borderRadius: 5, background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", width: "70%" }} />
      <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ height: 24, width: 60, borderRadius: 8, background: dark ? "rgba(99,102,241,0.08)" : "rgba(99,102,241,0.07)" }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        <div style={{ flex: 1, height: 38, borderRadius: 11, background: dark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.1)" }} />
        <div style={{ flex: 1, height: 38, borderRadius: 11, background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }} />
      </div>
    </div>
  </div>
);

/* ──────────────────────────────────────────
   Filter tag pill
────────────────────────────────────────── */
const FilterPill = ({ label, active, onClick, dark }) => (
  <button onClick={onClick} style={{
    padding: "6px 14px", borderRadius: 20,
    border: active
      ? "1px solid rgba(99,102,241,0.6)"
      : `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    background: active
      ? "rgba(99,102,241,0.15)"
      : dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    color: active ? "#a5b4fc" : dark ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.9)",
    fontSize: 12, fontWeight: 600, cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.18s",
    letterSpacing: "0.03em",
  }}>
    {label}
  </button>
);

/* ──────────────────────────────────────────
   Dark mode toggle
────────────────────────────────────────── */
const DarkToggle = ({ dark, setDark }) => (
  <button
    onClick={() => setDark(d => !d)}
    title={dark ? "Switch to light mode" : "Switch to dark mode"}
    style={{
      width: 44, height: 24, borderRadius: 12, position: "relative",
      background: dark
        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
        : "rgba(0,0,0,0.12)",
      border: "none", cursor: "pointer",
      transition: "background 0.3s",
      flexShrink: 0,
    }}
  >
    <motion.div
      animate={{ x: dark ? 20 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        position: "absolute", top: 2, left: 2,
        width: 20, height: 20, borderRadius: "50%",
        background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      {dark
        ? <Moon size={11} color="#6366f1" />
        : <Sun size={11} color="#f59e0b" />
      }
    </motion.div>
  </button>
);

/* ──────────────────────────────────────────
   Stat badge
────────────────────────────────────────── */
const StatBadge = ({ icon: Icon, label, value, accent, dark }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 8,
    padding: "8px 14px", borderRadius: 12,
    background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
    border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
  }}>
    <div style={{
      width: 28, height: 28, borderRadius: 8,
      background: accent + (dark ? "22" : "18"),
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <Icon size={13} color={accent} />
    </div>
    <div>
      <div style={{ fontSize: 16, fontWeight: 700, color: dark ? "#e2e8f0" : "#1e293b", lineHeight: 1, fontFamily: "'Syne', sans-serif" }}>{value}</div>
      <div style={{ fontSize: 10, color: dark ? "rgba(148,163,184,0.5)" : "rgba(100,116,139,0.6)", marginTop: 2, fontWeight: 500, letterSpacing: "0.05em" }}>{label}</div>
    </div>
  </div>
);

/* ──────────────────────────────────────────
   Main Feed
────────────────────────────────────────── */
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animation, setAnimation] = useState({ id: null, type: "" });

  const FILTERS = ["All", "React", "Node", "Python", "Go", "AI/ML", "DevOps"];

  const getFeed = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(response.data || []));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!feed) getFeed();
  }, [feed]);

  const handleAction = async (status, userId) => {
    try {
      setAnimation({ id: userId, type: status === "ignored" ? "left" : "right" });
      await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, { withCredentials: true });
      setTimeout(() => {
        dispatch(removeFeed(userId));
        setAnimation({ id: null, type: "" });
      }, 320);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredFeed = (feed || []).filter((user) => {
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.toLowerCase();
    const matchSearch = fullName.includes(searchTerm.toLowerCase());
    const matchFilter = activeFilter === "All" ||
      (user.skills || []).some(s => s.toLowerCase().includes(activeFilter.toLowerCase()));
    return matchSearch && matchFilter;
  });

  const bg = dark ? "#060614" : "#f4f4f8";
  const textPrimary = dark ? "#f1f5f9" : "#0f172a";
  const textSec = dark ? "rgba(148,163,184,0.6)" : "rgba(71,85,105,0.7)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .feed-root {
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
          transition: background 0.4s;
        }
        .feed-grid-bg::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.022) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .feed-body {
          position: relative; z-index: 1;
          max-width: 1320px; margin: 0 auto;
          padding: 36px 28px 80px;
        }
        @media(max-width: 640px){ .feed-body { padding: 20px 14px 60px; } }

        /* Topbar */
        .feed-topbar {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 36px; gap: 12px; flex-wrap: wrap;
        }
        .feed-topbar-left { display: flex; align-items: center; gap: 10px; }
        .feed-topbar-right { display: flex; align-items: center; gap: 12px; }

        .feed-logo {
          display: flex; align-items: center; gap: 8px;
        }
        .feed-logo-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 18px rgba(99,102,241,0.4);
        }
        .feed-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 800; letter-spacing: -0.5px;
        }
        .feed-logo-badge {
          font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
          padding: 2px 7px; border-radius: 6px;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.25);
          color: #818cf8;
          text-transform: uppercase;
        }

        /* Hero section */
        .feed-hero {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 28px; gap: 20px; flex-wrap: wrap;
        }
        .feed-hero-left {}

        .feed-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 3px 10px; border-radius: 20px;
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #a5b4fc;
          margin-bottom: 12px;
        }
        .feed-eyebrow-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #34d399;
          animation: liveDot 2s infinite;
        }
        @keyframes liveDot { 0%,100%{opacity:.4; transform:scale(1)} 50%{opacity:1; transform:scale(1.3)} }

        .feed-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(26px, 3.8vw, 42px);
          font-weight: 800; letter-spacing: -2px; line-height: 1.05;
        }
        .feed-title-grad {
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .feed-subtitle {
          font-size: 13px; margin-top: 8px; font-weight: 400;
        }

        /* Search */
        .feed-search-wrap { position: relative; width: 280px; }
        @media(max-width:600px){ .feed-search-wrap { width: 100%; } }
        .feed-search-icon { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); pointer-events: none; }
        .feed-search-input {
          width: 100%; padding: 11px 36px 11px 38px;
          border-radius: 14px; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          transition: all 0.2s;
        }

        /* Filters */
        .feed-filters {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 26px; flex-wrap: wrap;
        }
        .feed-filter-label {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; opacity: 0.45; margin-right: 4px;
        }

        /* Stats row */
        .feed-stats {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 30px; flex-wrap: wrap;
        }

        /* Grid */
        .feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
        }

        /* Empty state */
        .feed-empty {
          grid-column: 1 / -1;
          display: flex; flex-direction: column; align-items: center;
          padding: 80px 20px; text-align: center;
        }
        .feed-empty-ring {
          width: 80px; height: 80px; border-radius: 28px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
        }
        .feed-empty-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px; font-weight: 700; letter-spacing: -0.5px;
          margin-bottom: 8px;
        }
        .feed-empty-sub { font-size: 13.5px; max-width: 320px; line-height: 1.65; }
        .feed-empty-btn {
          margin-top: 24px; padding: 10px 26px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 12px; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 24px rgba(99,102,241,0.4);
        }
        .feed-empty-btn:hover { transform: translateY(-2px); box-shadow: 0 0 36px rgba(99,102,241,0.55); }

        /* Glow orbs */
        .f-orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(90px); z-index: 0; }

        /* Divider */
        .feed-divider {
          height: 1px; margin: 20px 0 24px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent);
        }

        @keyframes skPulse { 0%,100%{opacity:.5} 50%{opacity:1} }

        /* Section heading */
        .feed-section-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 18px;
        }
        .feed-section-title {
          font-family: 'Syne', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; opacity: 0.35;
        }
        .feed-count-badge {
          padding: 3px 10px; border-radius: 20px;
          background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.18);
          font-size: 11px; font-weight: 700; color: #818cf8; letter-spacing: 0.04em;
        }

        /* Card animation */
        .card-swipe-left  { animation: swipeLeft  0.32s ease-in forwards; }
        .card-swipe-right { animation: swipeRight 0.32s ease-in forwards; }
        @keyframes swipeLeft  { to { opacity:0; transform: translateX(-60px) rotate(-4deg); } }
        @keyframes swipeRight { to { opacity:0; transform: translateX(60px)  rotate(4deg);  } }
      `}</style>

      <div
        className={`feed-root ${dark ? "feed-grid-bg" : ""}`}
        style={{ background: bg, color: textPrimary }}
      >
        {dark && <StarCanvas dark={dark} />}

        {/* Orbs */}
        {dark && <>
          <div className="f-orb" style={{ width: 520, height: 520, background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", top: -160, right: -80 }} />
          <div className="f-orb" style={{ width: 420, height: 420, background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", bottom: 60, left: -100 }} />
        </>}

        <div className="feed-body">

          {/* ── Topbar ── */}
          <div className="feed-topbar">
            <div className="feed-topbar-left">
              <div className="feed-logo">
                <div className="feed-logo-icon">
                  <Code2 size={16} color="#fff" />
                </div>
                <span className="feed-logo-name" style={{ color: textPrimary }}>DevTinder</span>
                <span className="feed-logo-badge">Beta</span>
              </div>
            </div>
            <div className="feed-topbar-right">
              <span style={{ fontSize: 11, color: textSec, fontWeight: 500 }}>
                {dark ? "Dark" : "Light"}
              </span>
              <DarkToggle dark={dark} setDark={setDark} />
            </div>
          </div>

          {/* ── Hero ── */}
          <div className="feed-hero">
            <div className="feed-hero-left">
              <div className="feed-eyebrow">
                <span className="feed-eyebrow-dot" />
                Live feed
              </div>
              <h1 className="feed-title" style={{ color: textPrimary }}>
                Find your next<br />
                <span className="feed-title-grad">collaborator</span>
              </h1>
              <p className="feed-subtitle" style={{ color: textSec }}>
                {filteredFeed.length > 0
                  ? `${filteredFeed.length} developer${filteredFeed.length !== 1 ? "s" : ""} ready to connect`
                  : "No developers match your filters"}
              </p>
            </div>

            {/* Search */}
            <div className="feed-search-wrap">
              <span className="feed-search-icon">
                <Search size={14} color={dark ? "rgba(148,163,184,0.4)" : "rgba(100,116,139,0.5)"} />
              </span>
              <input
                type="text"
                className="feed-search-input"
                placeholder="Search developers…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)"}`,
                  color: textPrimary,
                }}
              />
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    onClick={() => setSearchTerm("")}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    style={{
                      position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
                      background: "none", border: "none", cursor: "pointer", padding: 2,
                      display: "flex", color: dark ? "rgba(148,163,184,0.5)" : "rgba(100,116,139,0.5)",
                    }}
                  >
                    <X size={13} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="feed-stats">
            <StatBadge icon={Users} label="Developers" value={(feed || []).length} accent="#6366f1" dark={dark} />
            <StatBadge icon={Zap} label="Active now" value={Math.max(1, Math.floor((feed || []).length * 0.7))} accent="#34d399" dark={dark} />
            <StatBadge icon={TrendingUp} label="New today" value={Math.floor((feed || []).length * 0.3)} accent="#f472b6" dark={dark} />
          </div>

          <div className="feed-divider" />

          {/* ── Filters ── */}
          <div className="feed-filters">
            <div className="feed-filter-label" style={{ color: textPrimary }}>
              <Filter size={11} />
              Stack
            </div>
            {FILTERS.map(f => (
              <FilterPill
                key={f} label={f}
                active={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                dark={dark}
              />
            ))}
          </div>

          {/* ── Section heading ── */}
          <div className="feed-section-row">
            <span className="feed-section-title" style={{ color: textPrimary }}>
              {searchTerm ? `Results for "${searchTerm}"` : "Suggested for you"}
            </span>
            {filteredFeed.length > 0 && (
              <span className="feed-count-badge">
                {Math.min(filteredFeed.length, 15)} shown
              </span>
            )}
          </div>

          {/* ── Grid ── */}
          <div className="feed-grid">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <SkeletonCard dark={dark} />
                </motion.div>
              ))
            ) : filteredFeed.length === 0 ? (
              <div className="feed-empty">
                <div className="feed-empty-ring">
                  {searchTerm
                    ? <Search size={30} color="#818cf8" />
                    : <Users size={30} color="#818cf8" />
                  }
                </div>
                <div className="feed-empty-title" style={{ color: textPrimary }}>
                  {searchTerm ? `No results for "${searchTerm}"` : "You're all caught up!"}
                </div>
                <p className="feed-empty-sub" style={{ color: textSec }}>
                  {searchTerm
                    ? "Try a different name or clear the search to browse all developers."
                    : "You've reviewed everyone in your feed. Check back soon for new developers."}
                </p>
                {(searchTerm || activeFilter !== "All") && (
                  <button
                    className="feed-empty-btn"
                    onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              filteredFeed.slice(0, 15).map((user, i) => (
                <motion.div
                  key={user._id}
                  className={
                    animation.id === user._id
                      ? animation.type === "left" ? "card-swipe-left" : "card-swipe-right"
                      : ""
                  }
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 80, damping: 15 }}
                  layout
                >
                  <UserCard
                    user={user}
                    onAction={(status) => handleAction(status, user._id)}
                    dark={dark}
                  />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;