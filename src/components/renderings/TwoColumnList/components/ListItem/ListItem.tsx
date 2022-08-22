import { Multiline, ZoomImage } from "@atoms";
import { ImageCardProps } from "@types";

export const ListItem = ({
  imageCardTitle,
  text,
  image,
  internalLink,
  internalLinkLabel,
}: ImageCardProps) => {
  if (!image || !image.url) return null;
  return (
    <>
      <div className="mb-md">
        {image.url && (
          <ZoomImage
            url={image.url}
            alt={imageCardTitle}
            lazyUrl={image.lazyUrl}
            sizes="600px"
            className="relative aspect-square"
          />
        )}
      </div>
      {imageCardTitle && <h3 className="text-h3 mb-2">{imageCardTitle}</h3>}
      {text && <Multiline text={text} />}
      {internalLink && internalLink.page.slug && (
        <p className="mt-md opacity-30 group-hover:opacity-100 transition duration-300 underline underline-offset-4">
          {internalLinkLabel || "Link"}
        </p>
      )}
    </>
  );
};
