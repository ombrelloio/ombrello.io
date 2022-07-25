import { FunctionComponent } from "react";

import PageHeader from "./PageHeader/PageHeader";
import PageFooter from "./PageFooter/PageFooter";

export { PageHeader, PageFooter };

type renderingsType = {
  [key: string]: FunctionComponent<any>;
};

export const Renderings: renderingsType = {
  PageHeader,
  PageFooter,
};

export default Renderings;
