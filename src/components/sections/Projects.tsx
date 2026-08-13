import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { SectionTitle } from "../ui/SectionTitle";
import { Container } from "../ui/Container";

export const Projects = () => {
  return (
    <Container id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          description="Aplicações reais desenvolvidas com foco em arquitetura escalável, código limpo e excelente experiência de usuário."
          subtitle="Portfólio & Casos de Sucesso"
          title="Projetos em Destaque"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/*<!-- Project Card -->*/}
          {projects.map((project) => {
            const color = project.color ? "cyan" : "emerald";
            return (
              <div
                key={project.id}
                className="bg-slate-900/70 backdrop-blur-md hover:shadow-cyan-900/20 hover:shadow-xl rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="bg-slate-900/80 p-6 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-${color}-500/10 border border-${color}-500/20 flex items-center justify-center text-${color}-400 font-bold`}
                    >
                      {project.id.toString().padStart(2, "0")}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold text-white group-hover:text-${color}-400 transition-colors`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full bg-${color}-500/10 text-${color}-400 font-mono`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/*<!-- Tech Stack Tags -->*/}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, index) => (
                      <Badge children={tech} key={index} variant={"small"} />
                    ))}
                  </div>

                  {/*<!-- Action Links -->*/}
                  <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {project.demoText}
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <FolderGit2 className="w-4 h-4" /> {project.githubText}
                    </a>
                    <a
                      href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Gostei%20do%20projeto%20da%20Clínica%20Odontológica%20e%20queria%20saber%20mais."
                      target="_blank"
                      className={`inline-flex items-center gap-2 text-xs font-semibold text-${color}-400 hover:text-${color}-300 transition-colors ml-auto`}
                    >
                      {project.textAction} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
