import { FC, useEffect, useRef, ReactNode } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import gsap from "gsap";

const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const duration = 0.25;
  const router = useRouter();

  const overlay = useRef(null);

  const onEnter = () => {
    window.scrollTo(0, 0);

    gsap.to(overlay.current, {
      autoAlpha: 0,
      ease: "none",
      duration: duration / 2,
    });
  };

  const onExit = () => {
    gsap.to(overlay.current, {
      autoAlpha: 1,
      ease: "none",
      duration: duration / 2,
    });
  };

  useEffect(() => {
    gsap.set(overlay.current, {
      autoAlpha: 0,
      duration: 0,
    });
  }, []);

  return (
    <>
      <SwitchTransition>
        <Transition
          onEntered={onEnter}
          onExit={onExit}
          timeout={duration * 1000}
          key={router.asPath}
        >
          {children}
        </Transition>
      </SwitchTransition>
      <div ref={overlay} className="fixed inset-0 z-[45] bg-black" />
    </>
  );
};

export { PageTransition };
