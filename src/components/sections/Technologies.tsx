import { technologies } from "../../data/technologies";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export const Technologies = () => {
  return (
    <Container id="tecnologias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          description="Alguns dos frameworks e linguagens que utilizo para criar soluções modernas e eficientes."
          subtitle="Tecnologias Utilizadas"
          title="Ferramentas de Última Geração"
        />

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-mono flex items-center gap-2"
            >
              <tech.icon className={`w-4 h-4 ${tech.color}`} /> {tech.name}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};
