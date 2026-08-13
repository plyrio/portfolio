import { Rocket } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const CTA = () => {
  return (
    <Container id="contato" >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-linear-to-r from-cyan-900/60 via-slate-900 to-emerald-900/60 p-8 sm:p-12 border border-slate-700/80 text-center space-y-6 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <Rocket className="w-4 h-4"/>
                     Vamos Começar Hoje?
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Pronto para destacar seu negócio na internet?
                </h2>

                <p className="text-slate-300 text-base max-w-xl mx-auto">
                    Entre em contato diretamente comigo no WhatsApp para analisarmos suas necessidades e criarmos uma proposta personalizada.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    
                    <Button children="Conversar no WhatsApp (+55 27 98869-3416)" href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Vim%20pelo%20seu%20site%20e%20quero%20solicitar%20um%20orçamento." variant="primary" size="xl" />
                </div>
            </div>
        </div>
    </Container>
  )
}
