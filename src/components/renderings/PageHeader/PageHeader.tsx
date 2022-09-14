import { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cx from "classnames";
import { Container, Transitionator } from "@layout";
import { Logo, Link } from "@atoms";
import { usePageContext } from "@app/hooks/PageContext/PageContext";
import { Locations } from "@molecules";
import { useScrollDirection } from "@app/hooks/useScrollDirection/useScrollDirection";
import { useFooterIsVisible } from "@app/hooks/useFooterIsVisible/useFooterIsVisible";
import { getComponentTheme } from "./pageHeader.helper";

const PageHeader = () => {
  const { siteMenu } = usePageContext() || {};
  const { pages } = siteMenu || {};
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // consts for theming and hide/show of header =>
  const headerRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);
  const scrollDirection = useScrollDirection();
  const { isFooterVisible } = useFooterIsVisible();

  const checkTheming = () => {
    setTheme(getComponentTheme(headerRef?.current?.offsetHeight || 76));
  };

  useEffect(() => {
    checkTheming();
  });

  useEffect(() => {
    /**
     *  SCROLL LISTENER => change theme on pageheader
     */
    checkTheming();

    if (document) {
      window.addEventListener(
        "scroll",
        debounce(checkTheming, 0, { leading: true, trailing: true })
      );
    }

    /**
     * ROUTE CHANGE => CLOSE MENU
     */
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // clean up
    return () => {
      router.events.on("routeChangeStart", handleRouteChange);
      window.removeEventListener("scroll", debounce(checkTheming, 0));
    };
  }, []);

  useEffect(() => {
    if (!isReady) setIsReady(true);
  }, [theme]);

  return (
    <>
      <Transitionator method="fade" stagger="200ms" isIn={isReady}>
        <header
          className={cx(
            "fixed top-0 left-0 w-full pointer-events-none z-50 transition duration-200",
            {
              "bg-th-bg": isReady,
              "-translate-y-full ":
                scrollDirection === "down" && !isFooterVisible,
            }
          )}
          ref={headerRef}
          data-mirror-theme={theme}
        >
          <Container className="flex justify-between items-center gap-x-5 py-5 will-change-transform">
            <NextLink href="/">
              <a className={cx("w-24 block pointer-events-auto")}>
                <Logo />
              </a>
            </NextLink>

            {/* desktop */}
            {pages && pages.length && (
              <nav className="absolute left-0 w-full lg:flex justify-center hidden pointer-events-none">
                <ul className="flex space-x-[1.5em] pointer-events-auto">
                  {pages.map(({ slug, navigationLabel }) => (
                    <li key={slug as string}>
                      <Link
                        href={slug}
                        noUnderline
                        className={`relative after:absolute after:bottom-[-2px] after:content[''] after:w-full after:left-0 after:h-[1px] after:bg-white after:duration-500 after:ease-out after:will-change-transform after:opacity-0 ${
                          router.asPath.substring(1) === slug
                            ? "after:opacity-100"
                            : ""
                        }`}
                      >
                        {navigationLabel}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#contact"
                      noUnderline
                      clickHandler={(e: any) => {
                        const elm = document.getElementById("contact");
                        e.preventDefault();
                        if (elm) {
                          elm.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}

            <Locations />
            {/* mobile */}
            <button
              className="w-5 pointer-events-auto lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  className="w-full h-auto fill-current "
                >
                  <path d="M13 5.25c2.5505 0 4.6315 2.01014 4.7451 4.53257L17.75 10v7c0 .4142-.3358.75-.75.75-.3797 0-.6935-.2822-.7432-.6482L16.25 17v-7c0-1.73303-1.3565-3.14925-3.0656-3.24486L13 6.75H1C.585786 6.75.25 6.41421.25 6c0-.3797.282154-.69349.648229-.74315L1 5.25h12Z" />
                  <path d="M5.46967.46967c.29289-.292893.76777-.292893 1.06066 0 .26627.266266.29047.68293.07262.97654l-.07262.08412L2.061 6l4.46933 4.4697c.26627.2662.29047.6829.07262.9765l-.07262.0841c-.26627.2663-.68293.2905-.97654.0726l-.08412-.0726-5-4.99997C.203403 6.26406.179197 5.8474.397052 5.55379l.072618-.08412 5-5Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 14"
                  className="w-full h-auto fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 .25c.4142 0 .75.335786.75.75 0 .3797-.2822.69349-.6482.74315L19 1.75H1C.585786 1.75.25 1.41421.25 1 .25.620304.532154.306509.898229.256847L1 .25h18Zm0 6c.4142 0 .75.33579.75.75 0 .3797-.2822.69349-.6482.74315L19 7.75H1C.585786 7.75.25 7.41421.25 7c0-.3797.282154-.69349.648229-.74315L1 6.25h18Zm.75 6.75c0-.4142-.3358-.75-.75-.75H1l-.101771.0068C.532154 12.3065.25 12.6203.25 13c0 .4142.335786.75.75.75h18l.1018-.0068c.366-.0497.6482-.3635.6482-.7432Z"
                    clipRule="evenodd"
                  />
                  <mask
                    id="a"
                    width="20"
                    height="14"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 .25c.4142 0 .75.335786.75.75 0 .3797-.2822.69349-.6482.74315L19 1.75H1C.585786 1.75.25 1.41421.25 1 .25.620304.532154.306509.898229.256847L1 .25h18Zm0 6c.4142 0 .75.33579.75.75 0 .3797-.2822.69349-.6482.74315L19 7.75H1C.585786 7.75.25 7.41421.25 7c0-.3797.282154-.69349.648229-.74315L1 6.25h18Zm.75 6.75c0-.4142-.3358-.75-.75-.75H1l-.101771.0068C.532154 12.3065.25 12.6203.25 13c0 .4142.335786.75.75.75h18l.1018-.0068c.366-.0497.6482-.3635.6482-.7432Z"
                      clipRule="evenodd"
                    />
                  </mask>
                </svg>
              )}
            </button>
          </Container>
        </header>
      </Transitionator>
      {/* mobile  */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-black text-white lg:hidden py-10 flex flex-col justify-between overflow-y-scroll">
          {pages && pages.length && (
            <ul className="text-center pt-20 text-20 space-y-6">
              {pages.map(({ slug, navigationLabel }) => (
                <li key={slug as string}>
                  <Link
                    href={slug}
                    noUnderline
                    className={
                      router.asPath.substring(1) === slug
                        ? "underline underline-offset-2"
                        : ""
                    }
                  >
                    {navigationLabel}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#contact">
                  <button onClick={() => setIsOpen(false)}>Contact</button>
                </a>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default PageHeader;
