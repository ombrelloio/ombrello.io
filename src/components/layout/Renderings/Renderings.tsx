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
            return <Component key={index} {...rendering} position={index} />;
          }
          return (
            <div key={index} className="w-full text-center py-16 border-b">
              {key}
            </div>
          );
        })}
      </>
    );
  }

  return null;
};

export { Renderings };
