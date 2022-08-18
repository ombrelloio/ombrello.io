import { forwardRef } from "react";
import cx from "classnames";

// preparation for different transitions
// see _transitions.scss for css details
const transitionStyleMap = {
  pullup: ["pullup-hidden", "pullup-visible"], // => default transition style
  fade: ["fade-hidden", "fade-visible"],
  zoomIn: ["zoomin-hidden", "zoomin-visible"],
  zoomOut: ["zoomout-hidden", "zoomout-visible"],
};

const Transitionator = forwardRef<
  HTMLDivElement,
  {
    children: any;
    isIn: boolean;
    className?: string;
    method?: "pullup" | "fade" | "zoomIn" | "zoomOut";
    duration?: "slow" | "normal";
    stagger?: string;
  }
>(
  (
    {
      children,
      isIn,
      className,
      method = "fade",
      duration = "normal",
      stagger = "0ms",
    },
    ref
  ) => {
    const transitionStyle: string[] = transitionStyleMap[method];

    return (
      <div
        className={cx(
          "transition-base-hidden",
          transitionStyle[0],
          `duration-${duration}`,
          {
            "transition-base-visible": isIn,
            [transitionStyle[1]]: isIn,
          },
          className
        )}
        ref={ref}
        style={{ transitionDelay: stagger || "" }}
        suppressHydrationWarning
      >
        {children}
      </div>
    );
  }
);

export { Transitionator };
