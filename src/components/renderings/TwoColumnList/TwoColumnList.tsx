import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ZoomImage, Multiline, Link, Button } from "@atoms";
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
    <Section rendering="TwoColumnList" className="overflow-hidden">
      <Container className="max-w-page">
        {heading && (
          <h2 className="text-h2 mt-16 mb-md md:mb-xl text-center">
            {heading}
          </h2>
        )}
        <div className="relative" ref={containerRef}>
          <Row>
            <Col className="space-y-20">
              {imageCards &&
                imageCards.length &&
                imageCards.map((cardItem, index) => (
                  <Row
                    className={`items-center ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <Col md="6">
                      <div>
                        {cardItem.image && cardItem.image.url && (
                          <ZoomImage
                            url={cardItem.image.url}
                            alt={cardItem.imageCardTitle}
                            lazyUrl={cardItem.image.lazyUrl}
                            sizes="600px"
                            className="relative aspect-square rounded-lg overflow-hidden"
                            rootMargin="500px"
                          />
                        )}
                      </div>
                    </Col>
                    <Col md="6" className="flex justify-center">
                      <div>
                        {cardItem.imageCardTitle && (
                          <h3 className="text-h3 mb-4 mt-6">
                            {cardItem.imageCardTitle}
                          </h3>
                        )}
                        {cardItem.text && (
                          <Multiline
                            text={cardItem.text}
                            className="max-w-md"
                          />
                        )}

                        {cardItem.internalLinkLabel && cardItem.internalLink && (
                          <Button
                            link={{
                              href: cardItem.internalLink.page.slug as string,
                            }}
                            className="mt-6"
                          >
                            {cardItem.internalLinkLabel}
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          {/* <Col sm="6" md="5" push={{ md: 1 }}>
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
              </Col> */}
          {/* <Col sm="6" md="5">
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
              </Col> */}
          {/* </Row> */}
          {/* )} */}
        </div>
      </Container>
    </Section>
  );
};

export { TwoColumnList };
