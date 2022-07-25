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
const Col: FC<GridType> = (params) => {
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
    tag: Component = defaultTag,
    ...rest
  } = params;

  return (
    <Component
      className={classnames("px-3", {
        [`w-${root == 12 ? "full" : `${root}/12`}`]: root,
        [`sm:w-${sm == 12 ? "full" : `${sm}/12`}`]: sm,
        [`md:w-${md == 12 ? "full" : `${md}/12`}`]: md,
        [`lg:w-${lg == 12 ? "full" : `${lg}/12`}`]: lg,
        [`xl:w-${xl == 12 ? "full" : `${xl}`}/12`]: xl,
        [`xxl:w-${xxl == 12 ? "full" : `${xxl}/12`}`]: xxl,
        [`display:w-${display == 12 ? "full" : `${display}/12`}`]: display,
        [`${className}`]: className,
      })}
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
        className="fixed bottom-0 right-0 z-[999] bg-white text-black transition-colors duration-300 ease-out px-4 py-1.5 uppercase text-[10px] border-t border-r"
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
        <div className="fixed inset-0 w-full h-screenz-[998] pointer-events-none">
          <Container>
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
