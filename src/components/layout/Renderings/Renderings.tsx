import renderings from "@renderings";

const Renderings = ({ list }: { list: any }) => {
  if (list && list.length > 0) {
    return (
      <>
        {list.map((rendering: any, index: number) => {
          const { __typename } = rendering;
          const key = __typename;
          const Component = renderings[key];

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
              {key
                ? `Key with no rendering registered: ${key} `
                : "undefined: missing key(__typename) or missing schema in query"}
            </div>
          );
        })}
      </>
    );
  }

  return null;
};

export { Renderings };
