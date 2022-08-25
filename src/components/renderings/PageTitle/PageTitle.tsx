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

const PageTitle = ({
  title,
  text,
  picture,
  componentTheming: theme,
}: PageTitleProps) => {
  return (
    <InvertibleHeroSection
      rendering="PageTitle"
      className={cx("md:pb-18 md:mb-[calc(96px+5vw)] xxl:mb-[172px]", {
        "th-c-inverted": theme?.theme === "inverted",
      })}
    >
      <Container className="max-w-page">
        <FadeIntersect>
          <Row className="space-y-[62px]">
            <Col md="6">
              {title && <h1 className="text-vw-large mb-6">{title}</h1>}
            </Col>
          </Row>
          <Row>
            <Col md="6" className="flex relative">
              {picture?.url && (
                <FadeIntersect
                  method="pullup"
                  className="absolute top-0 right-0 left-[-1.5rem] md:left-[-3rem] bottom-[calc(-72px-5vw)] xxl:bottom-[-172px]"
                >
                  {/* <Image
                    src={picture?.url}
                    placeholder="blur"
                    blurDataURL={picture.lazyUrl}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                  <ZoomImage
                    url={picture.url}
                    inset
                    alt={title}
                    lazyUrl={picture.lazyUrl}
                    sizes="600px"
                    className="absolute inset-0"
                  />
                </FadeIntersect>
              )}
            </Col>
            {/* weird css: push Col 1/2 column width */}
            <Col md="5" className="md:ml-[calc((100_/_24)_*_1%_-_10px)]">
              {text && (
                <div className="max-w-xl">
                  <Multiline text={text} />
                </div>
              )}
            </Col>
          </Row>
        </FadeIntersect>
      </Container>
      <div className="w-full h-[10vw] animate-slideUp " />
    </InvertibleHeroSection>
  );
};

export { PageTitle };
