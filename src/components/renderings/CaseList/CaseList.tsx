import { Col, Container, Row, Section } from "@layout";
import { CaseListProps } from "@types";
import { Case } from "./components/Case/Case";

const CaseList = ({ cases = [], kicker, multiLink }: CaseListProps) => {
  return (
    <Section rendering="CaseList">
      <Container>
        {kicker && (
          <Row>
            <Col md="10" push={{ md: 1 }}>
              <p className="mb-8 flex items-center">
                <span className="bg-th-on-bg inline-block w-4 h-[1px] mr-3" />
                {kicker}
              </p>
            </Col>
          </Row>
        )}
        <div className="[&>*+*]:mt-lg">
          {cases?.map(({ id, ...rest }, index) => {
            return (
              <Case
                key={id}
                {...rest}
                showLinkToAll={index === 0 && multiLink ? multiLink : undefined}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export { CaseList };
