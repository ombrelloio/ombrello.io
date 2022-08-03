import { useState, useEffect, useRef } from "react";
import { Container } from "@layout";
import { Logo, Link } from "@atoms";
import classNames from "classnames";
import { useRouter } from "next/router";
import { PageHeaderProps, PageProps } from "@types";
import { fixSlug } from "@app/helpers/utils.helpers";

const PageHeader = ({ pages = [] }: PageHeaderProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  // const { pages = [] } = siteMenu;

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.on("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ea0864f73dea512e836aa80459349d70"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.weather && data.weather[0]) {
          setWeatherIcon(data.weather[0].icon);
        }
      });
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full pointer-events-none z-50 duration-300 bg-black">
        <Container className="flex justify-between items-center py-5">
          <Link href="/">
            <span
              className={classNames(
                "w-24 block pointer-events-auto text-white"
              )}
            >
              <Logo />
            </span>
          </Link>
          {pages.length && (
            <nav className="absolute left-0 w-full justify-center hidden md:flex pointer-events-none">
              <ul className="flex text-16 gap-x-8 pointer-events-auto">
                {pages.map(({ slug, navigationLabel }) => (
                  <li key={slug}>
                    <Link href={fixSlug(slug)} noUnderline>
                      {navigationLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center space-x-2">
            <span>Copenhagen</span>
            <span className="w-8">
              {weatherIcon && (
                <img
                  src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                  alt=""
                  className="block w-full h-auto"
                />
              )}
            </span>
            <span>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </span>
          </div>
          <button
            className="w-5 pointer-events-auto md:hidden"
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
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-black text-white md:hidden py-10 flex flex-col justify-between overflow-y-scroll">
          {pages.length && (
            <ul className="text-center pt-20 text-20 space-y-6">
              {pages.map(({ slug, navigationLabel }) => (
                <li key={slug}>
                  <Link href={fixSlug(slug)} noUnderline>
                    {navigationLabel}
                  </Link>
                </li>
              ))}
              {/* <li>
              <Link href="/technologyservices">
                <a>Technology & Services</a>
              </Link>
            </li>
            <li>
              <Link href="/cases">
                <a>Cases</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/career">
                <a>Career</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li> */}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default PageHeader;
