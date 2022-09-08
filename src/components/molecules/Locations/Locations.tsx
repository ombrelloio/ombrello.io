/* @refresh reset */
import { FC, useState, useEffect, useRef } from "react";
import classnames from "classnames";
import gsap from "gsap";
import cache from "memory-cache";
import Image from "next/image";

type locationsData = {
  list: {
    name: string;
    weather: {
      icon: string;
    }[];
    sys: {
      country: string;
      timezone: number;
    };
  }[];
};

const cachedFetch = async (url: string) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  }

  const hours = 4;
  const response = await fetch(url);
  const data = await response.json();
  cache.put(url, data, hours * 1000 * 60 * 60);
  return data;
};

export const Locations: FC = () => {
  const locations = [
    "2618425",
    "2613887",
    "2616038",
    "2614481",
    "709930",
    "2620952",
  ];

  const [dateState, setDateState] = useState(new Date());
  const [data, setData] = useState<locationsData | null>(null);
  const list = useRef<HTMLUListElement>(null);
  const tl = useRef(
    gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 0.7,
      },
    })
  );

  const getDateWithUTCOffset = (now: Date, inputTzOffset: number) => {
    const currentTzOffset = -now.getTimezoneOffset() / 60; // in hours, i.e. -4 in NY
    const deltaTzOffset = inputTzOffset - currentTzOffset; // timezone diff

    const nowTimestamp = now.getTime(); // get the number of milliseconds since unix epoch
    const deltaTzOffsetMilli = deltaTzOffset * 1000 * 60 * 60; // convert hours to milliseconds (tzOffsetMilli*1000*60*60)
    const outputDate = new Date(nowTimestamp + deltaTzOffsetMilli); // your new Date object with the timezone offset applied.

    return outputDate.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
  };

  useEffect(() => {
    cachedFetch(
      `https://api.openweathermap.org/data/2.5/group?id=${locations.join(
        ","
      )}&units;=metric&appid=ea0864f73dea512e836aa80459349d70`
    ).then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  useEffect(() => {
    if (list.current && list.current.children) {
      Array.from(list.current.children).forEach((child) => {
        tl.current
          .fromTo(
            child,
            {
              opacity: 0,
            },
            {
              opacity: 1,
            }
          )
          .to(child, {
            opacity: 0,
            delay: 2,
          });
      });
    }
  }, [data]);

  return (
    <ul className="relative w-48 h-9 overflow-hidden grow" ref={list}>
      {data &&
        data.list.map(({ name, sys, weather }, index) => (
          <li
            className={classnames(
              "absolute w-full h-9 flex items-center justify-end space-x-2 opacity-0",
              {
                "opacity-100": index === 0,
              }
            )}
            key={index}
          >
            <span>{name}</span>
            <span className="w-8">
              {weather && weather[0] && (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  width="32"
                  height="32"
                  alt=""
                  className="block w-full h-auto "
                />
              )}
            </span>
            <span>
              {getDateWithUTCOffset(dateState, sys.timezone / (60 * 60))}
            </span>
          </li>
        ))}
    </ul>
  );
};
