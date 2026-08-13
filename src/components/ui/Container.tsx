type ContainerProps = {
  id: string;
  children: React.ReactNode;
  bgColor?: boolean;
};

export const Container = ({ id, children, bgColor=false }: ContainerProps) => {
  const bgBase = "py-20 relative";
  const bgWithColor = "py-20 w-screen relative bg-slate-900/40 border-t border-slate-800/80";
  return (
    <section id={id} className={bgColor ? bgWithColor : bgBase}>
      {children}
    </section>
  );
};
