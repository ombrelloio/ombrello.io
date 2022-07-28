import { MediaProps } from "@types";

const Media = ({ image }: MediaProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="Media"
    >
      Media
      <p>image: {image?.url}</p>
      <p className="max-w-2xl">
        <img src={image.url} alt="" />
      </p>
    </section>
  );
};

export { Media };
