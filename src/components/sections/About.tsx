import { Container } from "../ui/Container";
import { about } from "../../data/about";

export const About = () => {
  return (
    <Container id="sobre" bgColor>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm">
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-cyan-500 to-emerald-500 opacity-20 blur-xl"></div>
              <div className="relative glass-card rounded-2xl p-6 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-tr from-cyan-400 to-emerald-400 p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-3xl text-cyan-400">
                    <img
                      src={about.profile.image}
                      alt="Pedro Lyrio"
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {about.profile.name}
                  </h3>
                  <p className="text-sm text-cyan-400">{about.profile.role}</p>
                </div>
                <p className="text-xs text-slate-400">
                  {about.profile.description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              {about.section.label}
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              {about.section.title}
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm">
              {about.section.paragraphs[0]}
            </p>

            <p className="text-slate-300 leading-relaxed text-sm">
              {about.section.paragraphs[1]}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {about.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1"
                >
                  <h4 className="font-bold text-white text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
