import { useEffect, useRef } from "react";
import { Container, Section } from "@layout";
import { Image } from "@atoms";
import { MediaProps } from "@types";

import gsap from "gsap";

const Media = ({ image, componentThemingConfiguration: theme }: MediaProps) => {
  const isSplitTop = theme?.theme === "split_inverted_top";

  const imageElm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageElm) {
      gsap.fromTo(
        imageElm.current,
        {
          scale: 1.24,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: imageElm.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
      if (imageElm.current && imageElm.current.parentElement) {
        gsap.fromTo(
          imageElm.current.parentElement,
          {
            scale: 0.76,
            transformOrigin: "top center",
          },
          {
            scale: 1,
            scrollTrigger: {
              trigger: imageElm.current,
              start: "top bottom",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }
    }
  }, []);

  return (
    <Section rendering="Media" flush={isSplitTop}>
      <Container className="relative">
        {isSplitTop && (
          <>
            <div
              className="absolute bg-th-bg-inverted inset-0 bottom-1/2"
              data-component-theme="inverted"
            />
            <div className="absolute inset-0 top-1/2" data-component-theme="" />
          </>
        )}
        {image && image.url && (
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <div ref={imageElm} className="absolute inset-0 will-change">
              <Image
                src={image.url}
                layout="fill"
                objectPosition="center"
                objectFit="cover"
                blurDataURL={image.smallUrl}
                placeholder="blur"
                priority
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export { Media };
