//  style={{
//         background:
//           "linear-gradient(202.72deg, rgba(238, 127, 76, 0.26) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)",
//       }}
const GradientWrapper = ({ children, ...props }) => (
  <div
    {...props}
    className={`relative overflow-hidden my-16 border-t border-[#272727] sm:my-28 ${
      props.className || ""
    }`}
  >
    <div className="blur-[100px] absolute inset-0 w-full h-full"></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
