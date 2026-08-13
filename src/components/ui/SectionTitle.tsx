type SectionTitleProps = {
  title: string;
  subtitle: string;
  description: string;
  subtitleColor?: boolean;
};

export const SectionTitle = ({ title, subtitle, description, subtitleColor }: SectionTitleProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className={`text-xs font-bold uppercase tracking-widest ${subtitleColor ? 'text-cyan-400' : 'text-emerald-400'}`}>
        {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
        {title}
      </h2>
      <p className="text-slate-400 mt-3 text-base">
        {description}
      </p>
    </div>
  );
};
