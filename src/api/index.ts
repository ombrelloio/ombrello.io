import { GraphQLClient, gql } from "graphql-request";
import {
  heroSchema,
  bannerSchema,
  headlineAndTextAndLinkSchema,
  mediaSchema,
  cardListSchema,
  caseListSchema,
  imageCardListSchema,
  openPositionsSchema,
  jobDescriptionSchema,
  pageTitleSchema,
  twoColumnListSchema,
  textCollectionFragment,
} from "./schema";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
);

export async function getPage(slug: string) {
  const query = gql`
    query Page {
      page(where: { slug: "${slug}" }) {
        slug
        navigationLabel
        pageTheme
        
        renderings {
            ${heroSchema}
            ${bannerSchema}
            ${headlineAndTextAndLinkSchema}
            ${pageTitleSchema}
            ${mediaSchema}
            ${cardListSchema}
            ${caseListSchema}
            ${imageCardListSchema}
            ${openPositionsSchema}
            ${twoColumnListSchema}
            ${jobDescriptionSchema}
        }
        seo {
          noIndex
          noFollow
          keywords
          title
          updatedAt
          description
          image {
            url(
              transformation: {
                image: { resize: { width: 1200, height: 630 }}
              }
            )
          }
        }
      }
      siteMenu(where: { id: "cl63bnsi186kt0bunb3qkiboq" }) {
        pages {
          slug
          navigationLabel
        }
      }
      siteFooter(where: { id: "cl6dig8srr38p0bunfnanoyws" }) {
        mainContent {
            ${textCollectionFragment}
        }
        rightColumn {
            ${textCollectionFragment}
        }
      }
    }
  `;
  return client.request(query);
}

export async function getPages() {
  const query = gql`
    query Pages {
      pages {
        slug
      }
    }
  `;
  return client.request(query);
}
