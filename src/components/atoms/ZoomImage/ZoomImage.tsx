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
}

/**
 *
 * @className expects "relatve + aspect-*"
 */

const ZoomImage = ({
  url,
  alt,
  lazyUrl,
  sizes,
  className,
  direction = "out",
}: ImageZoomProps) => {
  return (
    <div className={cx(className, "overflow-hidden mb-sm ")}>
      <FadeIntersect
        method={direction === "out" ? "zoomOut" : "zoomIn"}
        stagger="200ms"
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
          />
        </div>
      </FadeIntersect>
    </div>
  );
};
export { ZoomImage };
