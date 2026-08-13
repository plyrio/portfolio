import { Laptop, Mail, Phone } from "lucide-react";
import { siteInfos } from "../../data/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-slate-800 bg-[#070A0F] text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400"></span>
                {siteInfos.name} — {siteInfos.profession}
            </div>

            <div className="flex items-center gap-6">
                <a href={siteInfos.github} target="_blank" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"><i data-lucide="github" className="w-4 h-4"></i><Laptop className="w-4 h-4" /> GitHub</a>
                <a href={`mailto:${siteInfos.email}`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"><Mail className="w-4 h-4" /> Email</a>
                <a href="https://wa.me/5527988693416" target="_blank" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Phone className="w-4 h-4" /> WhatsApp</a>
            </div>

            <p className="text-xs text-slate-500">
                © {currentYear} Pedro Lyrio. Todos os direitos reservados.
            </p>
        </div>
    </footer>
  )
}
