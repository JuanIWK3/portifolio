import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const About = () => {
  return (
    <div className="hero h-96">
      <div className="hero-content flex-col">
        <h1 className="text-4xl">
          Hi, I&apos;m <span className="text-primary">Juan</span>!
        </h1>
        <ul className="text-center">
          <li>A 21 years old from Brazil</li>
          <li>Currently learning Rust and Svelte</li>
        </ul>
        <div className="flex">
          <SocialIcon
            href="https://github.com/juaniwk3"
            icon={<AiFillGithub />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/juan-israel/"
            icon={<AiFillLinkedin />}
          />
        </div>
      </div>
    </div>
  );
};

export const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="btn btn-ghost btn-circle btn-lg text-4xl"
      target="_blank"
    >
      {icon}
    </a>
  );
};
