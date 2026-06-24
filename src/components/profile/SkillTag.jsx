// import { motion } from "framer-motion";
// import { X } from "lucide-react";

// const SkillTag = ({ skill, onRemove, accent }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.8 }}
//     className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold"
//   >
//     {skill}

//     {onRemove && (
//       <button onClick={onRemove}>
//         <X size={11} />
//       </button>
//     )}
//   </motion.div>
// );

// export default SkillTag;

import { motion } from "framer-motion";
import { X } from "lucide-react";

const SkillTag = ({ skill, onRemove, accent = "#818cf8" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold"
    style={{
      background: `${accent}18`,
      border: `1px solid ${accent}35`,
      color: accent,
    }}
  >
    {skill}

    {onRemove && (
      <button
        onClick={onRemove}
        className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer p-0"
        style={{ color: accent }}
      >
        <X size={11} />
      </button>
    )}
  </motion.div>
);

export default SkillTag;