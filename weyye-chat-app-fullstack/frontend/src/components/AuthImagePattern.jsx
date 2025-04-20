import rightsideimage from "../asset/image1_0 (1).jpg"
const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-6 ">
      <div className="rounded-sm max-w-md text-center">
        <img
          src={rightsideimage}
          alt="login cover"
          className="rounded-s-md  h-100 mt-12 items-center   "
        />
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;








{/* <div className="grid grid-cols-3 gap-3 mb-8">
{[...Array(9)].map((_, i) => (
  <div
    key={i}
    className={`aspect-square rounded-2xl bg-primary/10 ${
      i % 2 === 0 ? "animate-pulse" : ""
    }`}
  />
))}
</div> */}