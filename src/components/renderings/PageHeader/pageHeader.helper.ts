/* eslint-disable consistent-return */

/**
 * Check which elements that is present in the top of the page,
 * and get the DOM section/div with a specific component theme,
 * use that for the pageheader while the pageheader is on top of that rendering
 * => mirror the component theme on the pageHeader
 */

let currentRendering: HTMLDivElement | undefined;

const getTheme = (elm: HTMLElement) => {
  if (elm) {
    const theme = elm.getAttribute("data-component-theme");
    return theme;
  }
};

export const getComponentTheme = (y: number) => {
  let theme: string | undefined | null = "";

  const elements = document.elementsFromPoint(1, y);

  elements.forEach((elm) => {
    if (elm.hasAttribute("data-component-theme")) {
      currentRendering = elm as HTMLDivElement;
      theme = getTheme(currentRendering);
    }
  });

  // Clean up
  currentRendering = undefined;

  return theme;
};
