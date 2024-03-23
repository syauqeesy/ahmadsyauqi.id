import { ReactNode } from "react";

type BrandProps = {
  label: ReactNode;
};

const Brand = ({ label }: BrandProps) => {
  return <h1 className="text-2xl font-bold">{label}</h1>;
};

export default Brand;
