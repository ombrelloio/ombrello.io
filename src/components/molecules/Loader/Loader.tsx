import { FC, useEffect, useRef } from "react";
import gsap from "gsap";

export const Loader: FC = () => {
  const root = useRef<HTMLDivElement>(null);

  const duration = 1;
  const delay = 1;
  const ease = "expo.out";
  useEffect(() => {
    gsap.to(root.current, {
      autoAlpha: 1,
      delay,
      duration,
      ease,
    });

    if (root && root.current) {
      gsap.to(root.current, {
        autoAlpha: 0,
        delay,
        duration,
        ease,
      });
    }
  }, []);
  return (
    <div
      ref={root}
      className="fixed inset-0 w-full h-full bg-black z-[9999] overflow-hidden"
    />
  );
};
