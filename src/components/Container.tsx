import { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const Title = ({ children }: ComponentProps) => {
  return <main>{children}</main>;
};

export default Title;
