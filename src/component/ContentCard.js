import React from 'react';
import * as Reactstrap from 'react-bootstrap';

/**
 * Displays a preview of a single tool.
 * @param {String} room - the room the tool is located in.
 * @param {String} department - the department the tool belongs to.
 * @param {String} shortName - the short version of the tool's name.
 * @param {String} imageUrl - a URL pointing to an image for the machine
 * @param {Object} props
 * @return {JSX.Element}
 * @constructor
 */
function ContentCard({text, title, image, ...props}) {
  return (
    <Reactstrap.Card style={{ width: '18rem' }}>
      <Reactstrap.Card.Body>
        <Reactstrap.Card.Title>Card Title</Reactstrap.Card.Title>
        <Reactstrap.Card.Subtitle className="mb-2 text-muted">Card Subtitle</Reactstrap.Card.Subtitle>
        <Reactstrap.Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Reactstrap.Card.Text>
        <Reactstrap.Card.Link href="#">Card Link</Reactstrap.Card.Link>
        <Reactstrap.Card.Link href="#">Another Link</Reactstrap.Card.Link>
      </Reactstrap.Card.Body>
    </Reactstrap.Card>

  );
}

//    <Background>
//      <Name>{title}</Name>
//      <DetailText>{text}</DetailText>
//      <Image src={image} />
//    </Background>

export default ContentCard;
