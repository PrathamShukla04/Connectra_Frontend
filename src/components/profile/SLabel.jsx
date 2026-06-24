// const SLabel = ({ children }) => (
//   <div
//     className="text-[10px] font-bold uppercase mb-3 mt-1"
//   >
//     {children}
//   </div>
// );

// export default SLabel;

const SLabel = ({ children }) => (
  <div
    className="text-[10px] font-bold uppercase mb-3 mt-1"
    style={{ color: "rgba(148,163,184,0.4)", letterSpacing: "0.1em" }}
  >
    {children}
  </div>
);

export default SLabel;