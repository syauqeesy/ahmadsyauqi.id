type MenuItemProps = {
  link: string;
  label: string;
};

const MenuItem = ({ label, link }: MenuItemProps) => {
  return (
    <li className="mx-5">
      <a className="hover:underline" href={link}>
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
