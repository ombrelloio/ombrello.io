import { Container } from "@layout";
import { CaseListProps } from "@types";

const CaseList = ({ cases }: CaseListProps) => {
  return (
    <section
      className="w-full p-16 pt-20 border-b-[1px]"
      data-rendering="CaseList"
    >
      <p className="font-bold mb-4">CaseList (supports more than one entry)</p>

      <div>
        {cases &&
          cases.length &&
          cases.map(
            (
              { title, text, tags, images, externalLink, externalLinkLabel },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="my-10 pb-10 border-b-2 border-dotted "
                >
                  <h3>{title}</h3>
                  <p>{tags}</p>
                  <div>{text}</div>
                  <a href={externalLink}>{externalLinkLabel || "link"}</a>
                  <br />
                  {images &&
                    images.length &&
                    images.map(({ url }) => (
                      <img
                        src={url}
                        alt=""
                        className="max-w-xs inline-block"
                        key={url}
                      />
                    ))}
                </div>
              );
            }
          )}
      </div>
    </section>
  );
};

export { CaseList };
