import { Swiper, SwiperSlide } from "swiper/react";
import { Multiline, Image, MultiLink } from "@atoms";
import { Col, FadeIntersect, Row } from "@layout";
import { CaseProps } from "@types";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";

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
            <div className="flex justify-between items-end mb-6 md:mb-12">
              {title && <h2 className="text-h2">{title}</h2>}
              {!!showLinkToAll && (
                <MultiLink {...showLinkToAll} className="opacity-50" />
              )}
            </div>

            <FadeIntersect>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop
              >
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
      <Row className="mt-6 md:mt-12 gap-y-sm">
        {tags && (
          <Col md="3" push={{ md: 1 }}>
            <p>{tags}</p>
          </Col>
        )}
        <Col md="7" push={{ md: !tags ? 4 : "0" }} className="space-y-sm">
          {text && <Multiline text={text} />}
          {link && <MultiLink {...link} />}
        </Col>
      </Row>
    </article>
  );
};

export { Case };
