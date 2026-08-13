import { Menu, MessageSquare, X } from "lucide-react";
import { Logo } from "./navbar/Logo";
import { NavItens } from "./navbar/NavItens";
import { useRef, useState } from "react";
import { MobileNavigation } from "./navbar/MobileNavigation";

import { useClickOutside } from "../../hooks/useCLickOutside";
import { useCloseOnResize } from "../../hooks/useCloseOnResize";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(menuRef, () => setIsOpen(false));
  useCloseOnResize(() => setIsOpen(false));

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        {/*<!-- Desktop Nav Links -->*/}
        <NavItens />

        {/*<!-- CTA Button Header -->*/}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            href="https://wa.me/5527988693416?text=Olá%20Pedro!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento%20para%20um%20projeto."
            target="blank"
            variant="primary"
            size="sm"
            className="font-semibold"
          >
            <MessageSquare className="w-4 h-4" /> Solicitar Orçamento
          </Button>
        </div>

        {/*<!-- Mobile Menu Toggle -->*/}
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          id="menuBtn"
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/*<!-- Mobile Navigation Drawer -->*/}
      <div
        ref={menuRef}
        id="mobileMenu"
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#0B0F17] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 `}
      >
        <MobileNavigation />
      </div>
    </header>
  );
};
