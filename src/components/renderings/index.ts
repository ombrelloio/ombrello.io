import { FunctionComponent } from "react";

import PageHeader from "./PageHeader/PageHeader";
import PageFooter from "./PageFooter/PageFooter";
import { Hero } from "./Hero/Hero";
import { Banner } from "./Banner/Banner";
import { HeadlineAndTextAndLink } from "./HeadlineAndTextAndLink/HeadlineAndTextAndLink";
import { Media } from "./Media/Media";
import { CardList } from "./CardList/CardList";
import { CaseList } from "./CaseList/CaseList";
import { ImageCardList } from "./ImageCardList/ImageCardList";
import { OpenPositions } from "./OpenPositions/OpenPositions";
import { JobDescription } from "./JobDescription/JobDescription";
import { PageTitle } from "./PageTitle/PageTitle";
import { TwoColumnList } from "./TwoColumnList/TwoColumnList";

export { PageHeader, PageFooter };

type renderingsType = {
  [key: string]: FunctionComponent<any>;
};

export const Renderings: renderingsType = {
  PageHeader,
  PageFooter,
  Hero,
  Banner,
  HeadlineAndTextAndLink,
  Media,
  CardList,
  CaseList,
  ImageCardList,
  OpenPositions,
  JobDescription,
  PageTitle,
  TwoColumnList,
};

export default Renderings;
