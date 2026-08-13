import { process } from "../../data/process";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export const Process = () => {
  return (
    <Container id="processo" bgColor>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Como funciona o processo de criação"
          subtitle="Transparência & Agilidade"
          description="Etapas claras da primeira conversa até a entrega do seu site funcionando."
          subtitleColor={true}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/*<!-- Steps -->*/}
          {process.map((processItem) => (
            <div
              key={processItem.number}
              className="bg-slate-900/70 backdrop-blur-md hover:shadow-cyan-900/20 hover:shadow-xl overflow-hidden border border-slate-800 hover:border-cyan-400/20 transition-all group rounded-2xl p-6 relative space-y-3"
            >
              <div className="text-4xl font-extrabold text-slate-800">
                {processItem.number}
              </div>
              <h3 className="text-lg font-bold text-white">
                {processItem.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {processItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
