import { usePageContext } from "@app/hooks/PageContext/PageContext";
import renderings from "@renderings";

const Renderings = () => {
  const { page } = usePageContext() || {};
  const renderingsList = page?.renderings;

  if (renderingsList && renderingsList.length > 0) {
    return (
      <>
        {renderingsList.map((rendering: any, index: number) => {
          const { __typename } = rendering;
          const Component = renderings[__typename];

          if (Component) {
            return (
              <Component
                key={rendering.id || index}
                {...rendering}
                position={index}
              />
            );
          }
          return (
            <div key={index} className="w-full text-center py-16 border-b">
              {__typename
                ? `Key with no rendering registered: ${__typename} `
                : "undefined: missing '__typename' or missing schema in query"}
            </div>
          );
        })}
      </>
    );
  }

  return null;
};

export { Renderings };
