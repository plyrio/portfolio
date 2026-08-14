
export const GlowEffect = () => {
  return (
    <>
      <div
        className="absolute
    w-75
    h-75
    bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(0,0,0,0)_70%)]
    rounded-full
    pointer-events-none top-10 left-1/4"
      ></div>
      <div
        className="absolute
    w-75
    h-75
    bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(0,0,0,0)_70%)]
    rounded-full
    pointer-events-none top-1/3 right-10"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      ></div>
    </>
  );
};
