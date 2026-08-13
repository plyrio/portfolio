import { Dot, Eye, MessageCircle, PhoneCall } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import profileImage from '../../assets/euPedro.jpeg'


export const Hero = () => {
  return (
    <Container id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/*<!-- Hero Left Column Text -->*/}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    {/*<!-- Availability Badge -->*/}
                    
                    <Badge variant={'disponible'}  children="Disponível para novos projetos freelancers" icon={Dot} iconClassName="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                    {/*<!-- Main Headline -->*/}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Transformo sua ideia em <span className="bg-linear-to-br from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Sites & Landing Pages</span> que Convertem.
                    </h1>

                    {/*<!-- Subtitle -->*/}
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                        Desenvolvedor Web Full Stack especialista em criar soluções digitais modernas, ultrarrápidas, 100% otimizadas para celulares e preparadas para posicionar sua empresa no topo do Google.
                    </p>

                    {/*<!-- CTAs -->*/}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <Button href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento%20para%20um%20projeto." 
                   target="_blank" fullWidth  children="Solicitar Orçamento Sem Compromisso" variant='primary' size='xl' icon={PhoneCall} iconClassName='size-auto text-slate-950 animate-pulse'/>
                      <Button href="#projetos" 
                   fullWidth children="Ver Projetos" variant='outline' size='xl' icon={Eye} iconClassName='size-auto text-slate-300'/>
                        
                    </div>

                    {/*<!-- Micro Social Proof Badges -->*/}
                    <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                        <div>
                            <p className="text-2xl font-bold text-white">100%</p>
                            <p className="text-xs text-slate-400">Responsivo &amp; Mobile</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">&lt;1s</p>
                            <p className="text-xs text-slate-400">Carregamento Rápido</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">SEO</p>
                            <p className="text-xs text-slate-400">Pronto para o Google</p>
                        </div>
                    </div>
                </div>

                {/*<!-- Hero Right Column Visual Profile Card -->*/}
                <div className="lg:col-span-5">
                    <div className="relative mx-auto max-w-md">
                        {/*<!-- Card Border Glow -->*/}
                        <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-cyan-500 to-emerald-500 opacity-30 blur-xl"></div>
                        
                        <div className="relative glass-card rounded-2xl p-6 border border-slate-700/50 shadow-2xl space-y-6">
                            {/*<!-- Code Header Graphic -->*/}
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                                </div>
                                <span className="text-xs font-mono text-slate-500">pedro_developer.ts</span>
                            </div>

                            {/*<!-- Developer Brief Info -->*/}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl bg-linear-to-tr from-cyan-500 to-emerald-400 p-0.5 shrink-0">
                                    <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-xl text-cyan-400">
                                        <img src={profileImage} alt="Pedro Lyrio" className="w-full h-full object-cover rounded-[10px]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Pedro Lyrio</h3>
                                    <p className="text-xs text-cyan-400 font-medium">Dev Full Stack</p>
                                    <p className="text-xs text-slate-400 mt-0.5">Vitória - ES | Atendimento Brasil</p>
                                </div>
                            </div>

                            {/*<!-- Mini Feature List -->*/}
                            <div className="space-y-3 font-mono text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                                <p><span className="text-cyan-400">const</span> <span className="text-emerald-400">stack</span> = ['React', 'Next.js', 'Node.js', 'Tailwind'];</p>
                                <p><span className="text-cyan-400">const</span> <span className="text-emerald-400">foco</span> = 'Design Premium Alta Conversão';</p>
                                <p><span className="text-cyan-400">const</span> <span className="text-emerald-400">status</span> = <span className="text-amber-400">'Pronto para o próximo projeto'</span>;</p>
                            </div>

                            {/*<!-- Direct Quick Action -->*/}
                            <Button href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Quero%20conversar%20sobre%20um%20projeto." children="Conversar no WhatsApp (+55 27 98869-3416)" variant='outline' size='sm' icon={MessageCircle} iconClassName='text-emerald-400 size-auto' className="w-full font-semibold hover:bg-slate-700"/>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    </Container>
  )
}
