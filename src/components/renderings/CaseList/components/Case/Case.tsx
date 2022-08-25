import { Swiper, SwiperSlide } from "swiper/react";
import { Link, Multiline, Image, MultiLink } from "@atoms";
import { Col, FadeIntersect, Row } from "@layout";
import { CaseProps } from "@types";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";

const Case = ({
  tags,
  text,
  title,
  images,
  showLinkToAll,
  link,
}: CaseProps) => {
  return (
    <article>
      {images && images.length && (
        <Row>
          <Col md="10" push={{ md: 1 }}>
            <div className="flex justify-between items-end mb-12">
              {title && <h2 className="text-h2">{title}</h2>}
              {!!showLinkToAll && (
                <MultiLink {...showLinkToAll} className="opacity-50" />
              )}
            </div>

            <FadeIntersect>
              <Swiper>
                {images.map(({ id, url = "", smallUrl, fileName }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="relative aspect-[1368/768]">
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
      <Row className="mt-12 gap-y-sm">
        <Col md="3" push={{ md: 1 }}>
          {tags && <p>{tags}</p>}
        </Col>
        <Col md="7" className="space-y-sm">
          {text && <Multiline text={text} />}
          {link && <MultiLink {...link} />}
        </Col>
      </Row>
    </article>
  );
};

export { Case };
