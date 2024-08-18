import Container from "../Container";
import Brand from "./Brand";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between md:justify-between py-7">
        <Brand label="Ahmad Syauqi" />

        <Menu>
          <MenuItem link="#" label="Blog " />
          <MenuItem link="#" label="Portfolio" />
          <MenuItem link="#" label="Contact" />
        </Menu>
      </nav>
    </Container>
  );
};

export default Navbar;
