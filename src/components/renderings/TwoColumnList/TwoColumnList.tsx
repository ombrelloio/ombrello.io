import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
import { TwoColumnListProps } from "@types";
import { ListItem } from "./components/ListItem/ListItem";

const TwoColumnList = ({ heading, imageCards = [] }: TwoColumnListProps) => {
  const spliceAtIndex = Math.ceil(imageCards.length / 2);
  const list1 = new Array(...imageCards);
  const list2 = list1.splice(spliceAtIndex);

  const containerRef = useRef(null);
  const listOneRef = useRef(null);
  const listTwoRef = useRef(null);

  useEffect(() => {
    const mediaMatch = gsap.matchMedia();

    const trigger = containerRef.current;

    if (trigger) {
      mediaMatch.add(`(min-width: 640px)`, () => {
        gsap.fromTo(
          listOneRef.current,
          {
            y: 0,
          },
          {
            y: -100,
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.1,
            },
          }
        );
        gsap.fromTo(
          listTwoRef.current,
          {
            y: 0,
          },
          {
            y: -800,
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.1,
            },
          }
        );
      });
    }
  }, []);

  return (
    <Section
      rendering="TwoColumnList"
      className="sm:mb-[-300px] lg:mb-[-400px] xl:mb-[-600px] overflow-hidden"
    >
      <Container className="max-w-page">
        <Row>
          <Col md="10" push={{ md: 1 }}>
            {heading && (
              <h2 className="text-h2 sm:mb-lg md:mb-xl max-w-xl">{heading}</h2>
            )}
          </Col>
        </Row>
        {/*  */}
        <div className="relative" ref={containerRef}>
          {imageCards && imageCards.length && (
            <Row className="gap-y-md">
              <Col sm="6" md="5" push={{ md: 1 }}>
                <div ref={listOneRef} className="space-y-lg md:space-y-xxxl">
                  {list1?.map((cardItem, index) => {
                    return cardItem.internalLink &&
                      cardItem.internalLink.page.slug ? (
                      <Link
                        key={`${cardItem.internalLink.page.slug}_${index}`}
                        href={cardItem.internalLink.page.slug}
                        className="mb-6"
                        block
                      >
                        <ListItem
                          {...cardItem}
                          last={index === list1.length - 1}
                          first={index === 0}
                        />
                      </Link>
                    ) : (
                      <ListItem
                        key={`${cardItem.imageCardTitle}_${index}`}
                        {...cardItem}
                        last={index === list1.length - 1}
                        first={index === 0}
                      />
                    );
                  })}
                </div>
              </Col>
              <Col sm="6" md="5">
                <div ref={listTwoRef} className="space-y-lg md:space-y-xxxl">
                  {list2?.map((cardItem, index) => {
                    return cardItem.internalLink &&
                      cardItem.internalLink.page.slug ? (
                      <Link
                        key={`${cardItem.internalLink.page.slug}_${index}`}
                        href={cardItem.internalLink.page.slug}
                        className="mb-6"
                        block
                      >
                        <ListItem
                          {...cardItem}
                          topSpace={index === 0}
                          last={index === list2.length - 1}
                        />
                      </Link>
                    ) : (
                      <ListItem
                        key={`${cardItem.imageCardTitle}_${index}`}
                        {...cardItem}
                        topSpace={index === 0}
                        last={index === list2.length - 1}
                      />
                    );
                  })}
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </Section>
  );
};

export { TwoColumnList };
