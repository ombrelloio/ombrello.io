import { HeroProps } from "@types";

const Hero = ({ title, text }: HeroProps) => (
  <section className="w-full p-16 pt-20 border-b-[1px]">
    <strong>Hero Component:</strong>
    <p>{title}</p>
    <p>{text}</p>
  </section>
);

export { Hero };
