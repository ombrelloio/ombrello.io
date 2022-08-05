const multiLinkFragment = `
    multiLink {
        label
        emailLink
        externalUrl
        pageLink {
            slug
            navigationLabel
        }
        anchorLink
    }
`;
export const textCollectionFragment = `
    title
    text {
        html
    }
    ${multiLinkFragment} 
`;

export const heroSchema = `
    ... on Hero {
        __typename
        id
        title
        text
    }
`;

export const bannerSchema = `
... on Banner {
    __typename
    id
    title
    text {
        html
    }
    pageLink {
        slug
        navigationLabel
    }
}
`;
export const headlineAndTextAndLinkSchema = `
... on HeadlineAndTextAndLink {
    __typename
    id
    headline
    text {
        html
    }
    link {
        label
        internalLink {
            slug
            navigationLabel
        }
    }
}
`;

export const mediaSchema = `
... on Media {
    __typename
    id
    
    image {
        fileName
        url 
        smallUrl: url(
            transformation: {
                image: { resize: { width: 50, height: 50, fit: clip } }
            }
        )
    }
}`;

export const cardListSchema = `
... on CardList {
    __typename
    id
    heading: title
    list {
        title
        text 
    }
}
`;

export const caseListschema = `
... on CaseList {
    __typename 
    id
    cases {
        id
        title
        text
        tags
        externalLink
        externalLinkLabel
        images {
            id
            url
            fileName
            smallUrl: url(
                transformation: {
                    image: {resize: {width: 50, height: 50, fit: clip}}
                }
            )
        }
    }
}`;
/*
smallUrl: url(
                transformation: {
                image: { resize: { width: 50, height: 50, fit: clip } }
            }
            fileName
*/
export const imageCardListSchema = `
... on ImageCardList {
    __typename
    id
    heading: title,
    images {
        id
        imageCardTitle
        text
        image {
            url
            fileName
        }
    }
}`;

export const openPositionsSchema = `
... on OpenPositions {
    __typename
    id
    heading: title
    text
    contactEmail
    contactPageLink {
        slug
        navigationLabel
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
        id
        text
        title
      }
`;

export const twoColumnListSchema = `
... on TwoColumnList {
    __typename
    id
    heading
    imageCards {
        id
        imageCardTitle
        text
        image {
            url,
            fileName
        }
        internalLink {
            page {
                slug
                navigationLabel
            }
        }
        internalLinkLabel
    }
}`;
