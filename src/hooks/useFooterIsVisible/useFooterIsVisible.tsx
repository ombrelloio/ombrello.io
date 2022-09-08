import { useEffect, useState } from "react";

export const useFooterIsVisible = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElm = document.querySelector("[data-footer]");
    if (footerElm) {
      const obs = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsFooterVisible(true);
          else setIsFooterVisible(false);
        });
      };
      const observer = new IntersectionObserver(obs, {
        rootMargin: "0px",
        threshold: 0,
      });
      observer.observe(footerElm);
    }
  }, []);

  return { isFooterVisible };
};
