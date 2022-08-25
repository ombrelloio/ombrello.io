import { Link } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
import { TwoColumnListProps } from "@types";
import { ListItem } from "./components/ListItem/ListItem";

const TwoColumnList = ({ heading, imageCards = [] }: TwoColumnListProps) => {
  const spliceAtIndex = Math.ceil(imageCards.length / 2);
  const list1 = new Array(...imageCards);
  const list2 = list1.splice(spliceAtIndex);

  return (
    <Section rendering="TwoColumnList">
      <Container className="max-w-page">
        <Row>
          <Col md="10" push={{ md: 1 }}>
            {heading && (
              <h2 className="text-h2 mb-lg md:mb-xl max-w-xl">{heading}</h2>
            )}
          </Col>
        </Row>
        {imageCards && imageCards.length && (
          <Row className="gap-y-lg">
            <Col
              sm="6"
              md="5"
              push={{ md: 1 }}
              className="space-y-lg sm:space-y-0"
            >
              {list1?.map((cardItem, index) => {
                return cardItem.internalLink &&
                  cardItem.internalLink.page.slug ? (
                  <Link
                    key={`${cardItem.internalLink.page.slug}_${index}`}
                    href={cardItem.internalLink.page.slug}
                    className="mb-6"
                    block
                  >
                    <ListItem
                      {...cardItem}
                      last={index === list1.length - 1}
                      first={index === 0}
                    />
                  </Link>
                ) : (
                  <ListItem
                    key={`${cardItem.imageCardTitle}_${index}`}
                    {...cardItem}
                    last={index === list1.length - 1}
                    first={index === 0}
                  />
                );
              })}
            </Col>
            <Col sm="6" md="5" className="space-y-lg sm:space-y-0">
              {list2?.map((cardItem, index) => {
                return cardItem.internalLink &&
                  cardItem.internalLink.page.slug ? (
                  <Link
                    key={`${cardItem.internalLink.page.slug}_${index}`}
                    href={cardItem.internalLink.page.slug}
                    className="mb-6"
                    block
                  >
                    <ListItem
                      {...cardItem}
                      topSpace={index === 0}
                      last={index === list2.length - 1}
                    />
                  </Link>
                ) : (
                  <ListItem
                    key={`${cardItem.imageCardTitle}_${index}`}
                    {...cardItem}
                    topSpace={index === 0}
                    last={index === list2.length - 1}
                  />
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </Section>
  );
};

export { TwoColumnList };
