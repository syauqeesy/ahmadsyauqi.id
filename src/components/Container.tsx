import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-3 md:mx-12 ${className}`}>{children}</div>;
};

export default Container;
