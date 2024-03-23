import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Button from "../components/Button";

const Base = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container className="mt-10 md:mt-16">
        <div className="flex flex-col">
          <h2 className="text-3xl mb-1 md:mb-3 md:text-5xl">Hello</h2>
          <h2 className="text-3xl mb-1 md:mb-3 md:text-5xl">
            I'm Ahmad Syauqi
          </h2>
          <h2 className="text-3xl md:text-5xl">I'm a Software Engineer</h2>
        </div>
      </Container>

      <Container className="mt-10 md:mt-16">
        <ul className="flex justify-start">
          <li className="mr-3 md:mr-5">
            <Button link="https://linkedin.com/in/syauqeesy" label="LinkedIn" />
          </li>
          <li className="mr-3 md:mr-5">
            <Button link="https://github.com/syauqeesy" label="GitHub" />
          </li>
          <li>
            <Button link="https://instagram.com/syauqeesy" label="Instagram" />
          </li>
        </ul>
      </Container>

      <Container className="mt-auto">
        <footer className="p-5">
          <p className="text-center">
            Build with{" "}
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="inline"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>{" "}
            by{" "}
            <a className="underline" href="https://instagram.com/syauqeesy">
              Me
            </a>
            .
          </p>
        </footer>
      </Container>
    </div>
  );
};

export default Base;
