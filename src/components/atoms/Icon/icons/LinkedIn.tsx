import * as React from "react";
import { SVGProps } from "react";

const SvgLinkedIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.383 6.75c-.626 0-1.133.483-1.133 1.08 0 .597.507 1.092 1.132 1.092.625 0 1.132-.495 1.132-1.092 0-.596-.506-1.08-1.131-1.08Zm5.525 2.864c-.951 0-1.495.474-1.756.946h-.028v-.82H11.25v6.01h1.953v-2.975c0-.784.062-1.541 1.078-1.541 1.002 0 1.016.894 1.016 1.59v2.926H17.25v-3.3c0-1.616-.364-2.836-2.342-2.836Zm-6.502.127v6.009h1.954V9.74H8.406Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLinkedIn;
