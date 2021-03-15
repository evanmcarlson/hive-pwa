import React from 'react';
import * as Reactstrap from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
function ToolPreview({shortName, shortDesc, imageUrl, toolUrl, ...props}) {
  return (
    <Reactstrap.Container className="bg-white mt-5 p-2 text-left rounded">
        <Reactstrap.Row>
          <Reactstrap.Col>
            <h3>{shortName}</h3>
            <p>{shortDesc}</p>
          </Reactstrap.Col>
          <Reactstrap.Col>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt="Tool Image"
            />
          </Reactstrap.Col>
        </Reactstrap.Row>
        <Reactstrap.Row>
          <Reactstrap.Col>
              <Link to={toolUrl}>
              <Reactstrap.Button variant="secondary" size="lg"  className="mt-2" block>
                Learn More
              </Reactstrap.Button>
              </Link>
          </Reactstrap.Col>
        </Reactstrap.Row>

    </Reactstrap.Container>
  );
}

//const PreviewImage = styled.img`
//  max-width: 100%;
//  max-height: 100%;
//`;

export default ToolPreview;