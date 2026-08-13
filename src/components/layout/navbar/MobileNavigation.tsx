const MOBILEITENS = [
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Como Funciona", href: "#processo" },
  { name: "Sobre", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
];

export const MobileNavigation = () => {
  return (
    <>
    {MOBILEITENS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="block py-2 text-slate-300 hover:text-cyan-400"
        >
          {item.name}
        </a>
      ))}
    
      <a
        href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        className="block text-center mt-4 w-full py-3 rounded-lg font-semibold text-slate-900 bg-linear-to-r from-cyan-400 to-emerald-400"
      >
        Falar no WhatsApp
      </a>
    </>
      
    
  );
};
