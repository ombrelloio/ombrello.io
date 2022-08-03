import { Multiline } from "@atoms";
import { FadeIntersect, Section } from "@layout";
import { HeroProps } from "@types";

const Hero = ({ title, text }: HeroProps) => {
  return (
    <Section className="text-center" rendering="Hero">
      <FadeIntersect>
        {title && <h1 className="text-h1-vw">{title}</h1>}
        {text && (
          <Multiline
            text={text}
            className="opacity-80 mt-4 md:mt-6 max-w-lg m-auto"
          />
        )}
      </FadeIntersect>
    </Section>
  );
};
export { Hero };
