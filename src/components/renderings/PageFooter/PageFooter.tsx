import { Logo, Link, RichText } from "@atoms";
import { Container, Row, Col } from "@layout";

type PageFooterProps = {};

function PageFooter() {
  return (
    <footer className="sticky top-[100vh] mt-12 md:mt-24 py-16">
      <Container>
        <div className="text-center mb-64">
          <h2 className="text-120 font-bold">Let´s talk</h2>
          <p className="max-w-sm m-auto">
            We´re always interested to hear about your next big move. Reach out!
          </p>
        </div>

        <Row className=" justify-center">
          <Col md="3">
            <h3 className="font-bold text-20">Chat</h3>
            <p>+45 28 73 09 71</p>
            <p>info@ombrello.io</p>
          </Col>
          <Col md="3">
            <h3 className="font-bold text-20">Meet</h3>
            <p>
              Ombrello ApS
              <br /> Vesterbrogade 32
              <br />
              1620 København V
            </p>
          </Col>
          <Col md="3">
            <h3 className="font-bold text-20">Join</h3>
            <p className="max-w-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              <Link href="/career">
                <a className="underline underline-offset-2">Learn more</a>
              </Link>{" "}
              at dolorum voluptatibus
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default PageFooter;
