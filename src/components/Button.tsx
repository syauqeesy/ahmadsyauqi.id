type MenuItemProps = {
  link: string;
  label: string;
};

const MenuItem = ({ label, link }: MenuItemProps) => {
  return (
    <a
      className="block w-24 p-1 border-black border-2 text-center hover:bg-black hover:text-white"
      href={link}
    >
      {label}
    </a>
  );
};

export default MenuItem;
