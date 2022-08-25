import { FadeIntersect } from "@layout";
import { Image } from "@atoms";
import cx from "classnames";

interface ImageZoomProps {
  alt?: string;
  sizes?: string;
  className?: string;
  lazyUrl?: string;
  url: string;
  direction?: "in" | "out";
  inset?: boolean;
  stagger?: string;
}

/**
 *
 * @lazyUrl
 * @url
 * @className expects "relative + aspect-*"
 */

const ZoomImage = ({
  url,
  alt,
  lazyUrl,
  sizes,
  className,
  direction = "out",
  inset,
  stagger = "200ms",
}: ImageZoomProps) => {
  return (
    <div
      className={cx("overflow-hidden", {
        "absolute inset-0": inset,
      })}
    >
      <FadeIntersect
        method={direction === "out" ? "zoomOut" : "zoomIn"}
        stagger={stagger}
        inset={inset}
      >
        <div className={className}>
          <Image
            src={url}
            alt={alt}
            layout="fill"
            objectPosition="center"
            objectFit="cover"
            blurDataURL={lazyUrl}
            placeholder="blur"
            sizes={sizes}
            title={alt}
          />
        </div>
      </FadeIntersect>
    </div>
  );
};
export { ZoomImage };
