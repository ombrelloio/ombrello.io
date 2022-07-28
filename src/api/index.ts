import { GraphQLClient, gql } from "graphql-request";
import {
  heroSchema,
  bannerSchema,
  headlineAndTextAndLinkSchema,
  mediaSchema,
  cardListSchema,
  caseListschema,
  imageCardListSchema,
  openPositionsSchema,
  jobDescriptionSchema,
  pageTitleSchema,
  twoColumnList,
} from "./schema";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
);

export async function getMenu() {
  const query = gql`
    query Header {
      siteMenu(where: { id: "cl63bnsi186kt0bunb3qkiboq" }) {
        pages {
          slug
          navigationLabel
        }
      }
    }
  `;
  return client.request(query);
}

//   footer(where: { id: "cl0gojamnkdlh0axmw8d9zoak" }) {
//     leftColumn {
//       html
//     }
//     rightColumn {
//       html
//     }
//   }
//   soMes {
//     url
//     title
//   }

export async function getPage(slug: string) {
  const query = gql`
    query Page {
      page(where: { slug: "${slug}" }) {
        slug
        navigationLabel
        
        renderings {
            ${heroSchema}
            ${bannerSchema}
            ${headlineAndTextAndLinkSchema}
            ${mediaSchema}
            ${cardListSchema}
            ${caseListschema}
            ${imageCardListSchema}
            ${openPositionsSchema}
            ${jobDescriptionSchema}
            ${pageTitleSchema}
            ${twoColumnList}
        }
        seo {
          noIndex
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
  //   console.log(query);
  return client.request(query);
}
