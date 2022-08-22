import cx from "classnames";
import { Button, Multiline, MultiLink } from "@atoms";
import { Col, Container, FadeIntersect, Row } from "@layout";
import { HeroProps } from "@types";
import { useIntersectionObserver } from "usehooks-ts";
import { useEffect, useRef } from "react";
import { isMultiLinkValid } from "@app/helpers/utils.helpers";

const Hero = ({
  title,
  text,
  cta,
  componentThemingConfiguration: theme,
}: HeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: [0, 0.1, 0.9, 1],
  });

  // useEffect(() => {
  //   console.log(ref.current);
  //   const domElm = ref.current;
  //   const nextSection = domElm?.nextSibling;
  //   console.log(nextSection);
  // }, []);

  // useEffect(() => {
  //   if (ref?.current && entry) {
  //     console.log(entry, entry?.intersectionRatio, entry?.isIntersecting);
  //     if (entry?.intersectionRatio > 0) {
  //       console.log(ref.current.style);
  //       if (window) {
  //         const bgColor = window
  //           .getComputedStyle(ref.current, null)
  //           .getPropertyValue("background-color");
  //         console.log(bgColor);
  //       }
  //     }
  //   }
  // }, [entry]);

  return (
    <section
      className={cx(
        "pt-xxl md:pt-xxxl xl:pt-[208px] pb-xl md:pb-xxxl text-center",
        {
          "th-c-inverted": theme?.theme === "inverted",
        }
      )}
      data-rendering="Hero"
      ref={ref}
    >
      <Container>
        <Row>
          <Col sm="10" display="8" push={{ sm: 1, display: 2 }}>
            {title && (
              <FadeIntersect method="zoomIn">
                <Multiline text={title} tag="h1" className="text-h1-vw" />
              </FadeIntersect>
            )}
          </Col>
          {(text || isMultiLinkValid(cta)) && (
            <Col md="6" push={{ md: 3 }}>
              <FadeIntersect method="zoomIn" stagger="50ms">
                {text && <Multiline text={text} className="opacity-80 mt-8" />}
                {isMultiLinkValid(cta) && (
                  <MultiLink {...cta} asButton className="mt-8" />
                )}
              </FadeIntersect>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
export { Hero };
