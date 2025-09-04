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
