import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { services } from "../../data/services";
import { Check } from "lucide-react";

export const Services = () => {
  return (
    <Container id="servicos" bgColor>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitleColor={true}
          title="Como posso ajudar o seu negócio a crescer"
          subtitle="Soluções Sob Medida"
          description="Desenvolvimento focado em estética moderna, carregamento ultrarrápido e resultados reais."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*<!-- Services -->*/}
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-slate-900/70 backdrop-blur-md hover:shadow-cyan-900/20 hover:shadow-xl border border-slate-800 hover:border-cyan-400/20 group rounded-2xl p-8 space-y-4 transition-all hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor} ${service.color}`}
              >
                <service.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
              {service.features.length > 0 ? (
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Tenho%20um%20projeto%20específico%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  className="mt-6 w-full text-center py-3 px-4 rounded-xl text-sm font-semibold text-slate-900 bg-linear-to-r from-cyan-400 to-emerald-400 hover:opacity-90 transition-opacity"
                >
                  Falar com o Pedro no WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
