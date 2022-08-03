import { Container, Section } from "@layout";
import { CaseListProps } from "@types";
import { Case } from "./components/Case/Case";

const CaseList = ({ cases }: CaseListProps) => {
  return (
    <Section rendering="CaseList">
      <Container>
        {cases &&
          cases.length &&
          cases.map(({ id, ...rest }, index) => {
            return (
              <Case key={id} {...rest} push={index % 2 === 1 ? "2" : "0"} />
            );
          })}
      </Container>
    </Section>
  );
};

export { CaseList };
