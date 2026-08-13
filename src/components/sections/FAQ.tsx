import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { faq } from "../../data/faq";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  return (
    <Container id="faq" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Perguntas Frequentes" subtitle="Dúvidas Frequentes" description="" />
            

            <div className="space-y-4">
                
                {/*<!-- FAQ Item  -->*/}
                {faq.map((item) => (
                  <details key={item.id} className="bg-slate-900/70 backdrop-blur-md border border-white/8 rounded-xl p-6 group">
                    <summary className="font-bold text-white cursor-pointer flex items-center justify-between list-none">
                        <span>{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                        
                    </summary>
                    <p className="text-sm text-slate-300 mt-4 leading-relaxed border-t border-slate-800/80 pt-4">
                        {item.answer}
                    </p>
                </details>
                ))}
                

                

            </div>
        </div>
    </Container>
  )
}
