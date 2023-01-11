import { Multiline, ZoomImage } from "@atoms";
import { ImageCardProps } from "@types";
import cx from "classnames";

export const ListItem = ({
  imageCardTitle,
  text,
  image,
  internalLinkLabel,
  topSpace,
  first,
  last,
}: ImageCardProps) => {
  if (!image || !image.url) return null;
  return (
    <article>
      <div className={cx({ "sm:aspect-square": topSpace, "mt-6": !first })} />
      <div className="mb-6 mt-6">
        {image.url && (
          <ZoomImage
            url={image.url}
            alt={imageCardTitle}
            lazyUrl={image.lazyUrl}
            sizes="600px"
            className="relative aspect-square rounded-lg overflow-hidden"
            rootMargin="500px"
          />
        )}
      </div>
      <div
        className={cx({
          // "sm:aspect-square": !last,
        })}
      >
        {imageCardTitle && <h3 className="text-h3 mb-4">{imageCardTitle}</h3>}
        {text && <Multiline text={text} className="max-w-md" />}
        {internalLinkLabel && (
          <p className="mt-6 inline-block underline underline-offset-4">
            {internalLinkLabel}
          </p>
        )}
      </div>
    </article>
  );
};
