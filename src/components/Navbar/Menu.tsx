import { ReactNode } from "react";

type MenuProps = {
  children: ReactNode;
};

const Menu = ({ children }: MenuProps) => {
  return <ul className="hidden md:flex">{children}</ul>;
};

export default Menu;
