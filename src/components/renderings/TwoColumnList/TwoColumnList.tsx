import { Link } from "@atoms";
import { Col, Container, Row, Section } from "@layout";
import { TwoColumnListProps } from "@types";
import { ListItem } from "./components/ListItem/ListItem";

const TwoColumnList = ({ heading, imageCards }: TwoColumnListProps) => {
  return (
    <Section rendering="TwoColumnList">
      <Container>
        {heading && (
          <h2 className="text-h2 mb-lg md:mb-xl max-w-xl">{heading}</h2>
        )}
        {imageCards && imageCards.length && (
          <Row className="gap-y-md justify-between">
            {imageCards.map((cardItem) => (
              <Col
                sm="6"
                md="5"
                key={cardItem.id}
                className="relative even:sm:top-16 even:md:top-32 even:last:sm:mb-16 even:last:md:mb-32"
              >
                {cardItem.internalLink && cardItem.internalLink.page.slug ? (
                  <Link
                    href={cardItem.internalLink.page.slug}
                    className="block group"
                    noUnderline
                  >
                    <ListItem {...cardItem} />
                  </Link>
                ) : (
                  <ListItem {...cardItem} />
                )}
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Section>
  );
};

export { TwoColumnList };
