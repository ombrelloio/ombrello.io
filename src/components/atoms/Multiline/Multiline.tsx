import { FC, ElementType } from "react";

const Multiline: FC<{ className?: string; text: string; tag?: string }> = ({
  className,
  text,
  tag = "p",
}) => {
  const Tag = tag as ElementType;

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{
        __html: text.replaceAll("\n", "<br />"),
      }}
    />
  );
};

export { Multiline };
