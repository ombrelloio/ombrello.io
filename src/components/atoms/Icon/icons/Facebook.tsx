import * as React from "react";
import { SVGProps } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={11} stroke="currentColor" strokeWidth={2} />
    <path
      d="M13.502 6C11.925 6 11 6.837 11 8.743v1.677H9v2.009h2v4.821h2v-4.821h1.6l.4-2.01h-2V9.083c0-.718.233-1.073.904-1.073H15V6.082C14.81 6.057 14.258 6 13.502 6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFacebook;
