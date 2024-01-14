import { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const Container = ({ children }: ComponentProps) => {
  return <main>{children}</main>;
};

export default Container;
