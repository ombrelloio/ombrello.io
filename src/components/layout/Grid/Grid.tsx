/* eslint-disable eqeqeq */
import { FC, ReactNode, useState } from "react";
import classnames from "classnames";

export type cols =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type PushCols = cols | "0"; // cant use 0 as number because the validation will always be false

type tags = "div" | "section" | "article" | "aside" | "header" | "footer";
const defaultTag = "div";

export interface GridType {
  className?: string;
  root?: cols;
  sm?: cols;
  md?: cols;
  lg?: cols;
  xl?: cols;
  xxl?: cols;
  display?: cols;
  tag?: tags;
  children?: ReactNode;
}

export type ColPushType = {
  root?: PushCols;
  sm?: PushCols;
  md?: PushCols;
  lg?: PushCols;
  xl?: PushCols;
  xxl?: PushCols;
  display?: PushCols;
};

export interface ColType extends GridType {
  push?: ColPushType;
}

const Container: FC<GridType> = (props) => {
  const { children, className, tag: Component = defaultTag, ...rest } = props;
  return (
    <Component
      className={classnames("w-full ml-auto mr-auto px-6 md:px-12", {
        [`${className}`]: className,
      })}
      {...rest}
      data-comp="Container"
    >
      {children}
    </Component>
  );
};

const Row: FC<{ className?: string; tag?: tags; children?: ReactNode }> = (
  props
) => {
  const { children, className, tag: Component = defaultTag, ...rest } = props;
  return (
    <Component
      className={classnames("flex flex-wrap -mx-3", className)}
      {...rest}
      data-comp="Row"
    >
      {children}
    </Component>
  );
};
const Col: FC<ColType> = (params) => {
  const {
    children,
    root = 12,
    sm,
    md,
    lg,
    xl,
    xxl,
    display,
    className,
    push,
    tag: Component = defaultTag,
    ...rest
  } = params;

  /* set push values for breakpoints
    (exclude root value as this is handled in the className object) */
  const pushClasses =
    !!push &&
    Object.entries(push)
      .map(([bp, size]) => (bp !== "root" ? `${bp}:ml-${size}/12` : ""))
      .join(" ");

  /* set width in a breakpoint */
  const colWidth = (bp?: cols) => (bp == 12 ? "full" : `${bp}/12`);

  return (
    <Component
      className={classnames(
        "px-3",
        {
          // width values
          [`w-${colWidth(root)}`]: root,
          [`sm:w-${colWidth(sm)}`]: sm,
          [`md:w-${colWidth(md)}`]: md,
          [`lg:w-${colWidth(lg)}`]: lg,
          [`xl:w-${colWidth(xl)}`]: xl,
          [`xxl:w-${colWidth(xxl)}`]: xxl,
          [`display:w-${colWidth(display)}`]: display,
          // push values (margin left)
          [`ml-${push?.root}/12`]: push?.root,
        },
        pushClasses,
        className
      )}
      {...rest}
      data-comp="Col"
    >
      {children}
    </Component>
  );
};

const GridDebug: FC<GridType> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-0 right-0 z-[99999999] bg-white text-black transition-colors duration-300 ease-out px-4 py-1.5 uppercase text-[10px] border-t border-r"
        onClick={() => setVisible(!visible)}
      >
        <span className="sm:hidden">root</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block xxl:hidden">xl</span>
        <span className="hidden xxl:block display:hidden">xxl</span>
        <span className="hidden display:block">display</span>
      </button>
      {visible && (
        <div className="fixed inset-0 w-full h-screen z-[99999999] pointer-events-none">
          <Container className="max-w-page">
            <Row>
              {[...Array(12)].map((_e, i) => (
                <Col root="1" key={`c_${i}`} className="hidden md:block">
                  <div className="w-full h-screen bg-[red] bg-opacity-20" />
                </Col>
              ))}

              {[...Array(4)].map((_e, i) => (
                <Col root="3" key={`c_${i}`} className="md:hidden">
                  <div className="w-full h-screen bg-[red] bg-opacity-20" />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
export { Container, Row, Col, GridDebug };
