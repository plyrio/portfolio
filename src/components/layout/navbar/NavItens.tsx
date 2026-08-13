const NAVITENS = [
  { title: "Serviços", href: "#servicos" },
  { title: "Projetos", href: "#projetos" },
  { title: "Como Funciona", href: "#processo" },
  { title: "Sobre", href: "#sobre" },
  { title: "FAQ", href: "#faq" },
];

export const NavItens = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
      {NAVITENS.map((item) => (
        <a
          href={item.href}
          className="hover:text-cyan-400 transition-colors"
          key={item.href}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};
