export const heroSchema = `
    ... on Hero {
        __typename
        title
        text
    }
`;

export const bannerSchema = `
... on Banner {
    __typename
    title
    text
    pageLink {
        slug
        navigationLabel
    }
}
`;
export const headlineAndTextAndLinkSchema = `
... on HeadlineAndTextAndLink {
    __typename
    headline
    text
    pageLink {
        slug
        navigationLabel
    }
}
`;

export const mediaSchema = `
... on Media {
    __typename
    image {
        url
    }
}`;

export const cardListSchema = `
... on CardList {
    __typename
    list {
        text 
        title
    }
}
`;

export const caseListschema = `
... on CaseList {
    __typename 
    cases {
        title
        text
        tags
        externalLink
        externalLinkLabel
        images {
            url
        }
    }
}`;

export const imageCardListSchema = `
... on ImageCardList {
    __typename
    images {
        id
        title
        text
        image {
            url
        }
    }
}`;

export const openPositionsSchema = `
... on OpenPositions {
    __typename
    field: title
    text
    contactEmail
    contactPageLink {
        slug
    }
    jobPages {
        slug
        navigationLabel
        renderings {
            ... on JobDescription {
                __typename
                id
                hours
                jobHeader
            }
        }
    }
}
`;

export const jobDescriptionSchema = `
... on JobDescription {
    __typename
    id
    jobDescription {
        html
    }
    hours
    jobHeader
}
`;

export const pageTitleSchema = ` 
... on PageTitle {
        __typename
        text
        title
      }
`;

export const twoColumnList = `
... on TwoColumnList {
    __typename
    imageCards {
        image {
            url
        }
        id
        title
        text
    }
}`;
