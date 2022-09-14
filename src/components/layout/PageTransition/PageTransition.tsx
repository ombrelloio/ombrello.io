import { FC, useEffect, useRef, ReactNode, useState } from "react";
import {
  SwitchTransition,
  TransitionGroup,
  Transition,
} from "react-transition-group";
import { useRouter } from "next/router";
import gsap from "gsap";

const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const duration = 1;
  const router = useRouter();
  const [state, setstate] = useState(router.asPath);

  const overlay = useRef(null);

  useEffect(() => {
    setstate(router.asPath);
    const handleStart = () => {
      setstate(router.asPath); // then on a router change, I'm setting the state again
      // other handleStart logic goes here
    };

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);

  const onEnter = () => {
    // window.scrollTo(0, 0);

    gsap.fromTo(
      overlay.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "none",
        delay: 1,
        duration,
      }
    );
  };

  const onExit = () => {
    gsap.fromTo(
      overlay.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "none",
        duration,
      }
    );
  };

  // useEffect(() => {
  //   gsap.set(overlay.current, {
  //     opacity: 0,
  //     duration: 0,
  //   });
  // }, []);

  return (
    <>
      <Transition
        onEnter={onEnter}
        onExit={onExit}
        timeout={duration * 1000}
        in={router.asPath !== state}
      >
        {children}
      </Transition>
      <div
        ref={overlay}
        className="fixed inset-0 z-[9999999999] bg-black will-change-transform pointer-events-none opacity-0"
      />
    </>
  );
};

export { PageTransition };
