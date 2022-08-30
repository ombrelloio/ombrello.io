import cx from "classnames";
import { Button, Image, Multiline, ZoomImage } from "@atoms";
import {
  Col,
  Container,
  FadeIntersect,
  InvertibleHeroSection,
  Row,
} from "@layout";
import { PageTitleProps } from "@types";
import { memo } from "react";

const PageTitle = ({
  title,
  text,
  picture,
  componentTheming: theme,
}: PageTitleProps) => {
  const hasImage = picture?.url;
  const TextChunk = memo(({ className }: { className?: string }) =>
    text ? (
      <Col md="5" className={cx("md:ml-half-col", className)}>
        <div className="max-w-xl">
          <Multiline text={text} />
        </div>
      </Col>
    ) : null
  );

  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx("md:pb-18 ", {
        // extra margin to align with normal spacing in section gaps plus added space for the image
        "md:mb-[calc(96px+5vw)] xl:mb-[calc(96px+9.5vw)]": hasImage,
        "md:mb-section-gap xl:mb-section-gap-xl display:mb-section-gap-display":
          !hasImage,
        "th-c-inverted": theme?.theme === "inverted",
      })}
    >
      <Container className="max-w-page">
        <FadeIntersect>
          <Row
            className={cx("space-y-[62px]", {
              // when theres no image, header and text is topaligned:
              "md:space-y-0": !hasImage,
            })}
          >
            <Col md="6">
              {title && (
                <h1 className="text-vw-large mb-6 xl:mb-lg">{title}</h1>
              )}
            </Col>
            {!hasImage && <TextChunk className="md:!mt-6" />}
          </Row>
          <Row>
            <Col md="6" className="md:flex relative">
              {picture?.url && (
                <FadeIntersect
                  method="pullup"
                  className="md:absolute top-0 right-2.5 left-[-1.5rem] md:left-[-3rem] bottom-[calc(-72px-5vw)] xxl:bottom-[-172px]"
                >
                  <div className="relative md:static aspect-video md:aspect-auto">
                    <Image
                      src={picture?.url}
                      placeholder="blur"
                      blurDataURL={picture.lazyUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </FadeIntersect>
              )}
              {/* <ZoomImage
                    url={picture.url}
                    inset={false}
                    alt={title}
                    lazyUrl={picture.lazyUrl}
                    sizes="600px"
                    className="relative aspect-video md:absolute md:inset-0"
                  /> 
                  // </FadeIntersect>
                */}
            </Col>
            {/* weird css: push Col 1/2 column width */}
            {hasImage && <TextChunk className="mt-md md:mt-0" />}
          </Row>
        </FadeIntersect>
      </Container>
      {hasImage && <div className="w-full h-[10vw] animate-slideUp " />}
    </InvertibleHeroSection>
  );
};

export { PageTitle };
