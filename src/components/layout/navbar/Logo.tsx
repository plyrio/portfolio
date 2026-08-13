import Typewriter from "typewriter-effect";

export const Logo = () => {
  return (
    <>
      <a
        href="#"
        className="font-logo flex items-center gap-2 text-xl font-bold tracking-tight text-white"
      >
        <span className="w-3 h-3 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400"></span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `
                Pedro 
                <span class="bg-linear-to-br from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-logo">
          Lyrio
        </span>`,
              )
              .start();
          }}
        />
      </a>
    </>
  );
};
