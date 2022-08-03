import { Swiper, SwiperSlide } from "swiper/react";
import { Link, Multiline, Image } from "@atoms";
import { Col, FadeIntersect, Row } from "@layout";
import { CaseProps } from "@types";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import { PushCols } from "@app/components/layout/Grid/Grid";

interface CaseExtProps extends CaseProps {
  push: PushCols;
}

const Case = ({
  tags,
  text,
  title,
  externalLink,
  externalLinkLabel,
  images,
  push,
}: CaseExtProps) => {
  return (
    <article className="my-16 md:my-32">
      {images && images.length && (
        <Row>
          <Col md="10" push={{ md: push }}>
            <FadeIntersect>
              <Swiper>
                {images.map(({ id, url = "", smallUrl, fileName }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="relative aspect-video">
                        <Image
                          src={url}
                          alt={fileName}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL={smallUrl}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </FadeIntersect>
          </Col>
        </Row>
      )}
      <Row className="mt-lg">
        <Col md="5" push={{ md: push }}>
          {title && <h2 className="text-h2">{title}</h2>}
          {tags && <p>{tags}</p>}
        </Col>
        <Col md="5">
          {text && <Multiline text={text} />}
          {externalLink && (
            <Link href={externalLink} className="inline-block mt-8">
              {externalLinkLabel || "Visit site"}
            </Link>
          )}
        </Col>
      </Row>
    </article>
  );
};

export { Case };
