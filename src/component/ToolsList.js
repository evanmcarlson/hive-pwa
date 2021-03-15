import React from 'react';
import * as Reactstrap from 'react-bootstrap';
import ToolPreview from './ToolPreview';
import {getTools} from './ToolsRepository';

/**
 * Displays a list of tools.
 * @param {Object} props
 * @return {JSX.Element}
 * @constructor
 */
//function ToolsList(props) {
//  return (
//    <Reactstrap.Container>
//      {getTools().map((tool, index) =>
//      <Reactstrap.Row>
//        <Reactstrap.Col lg="6">
//          <ToolPreview key={index} {...tool}/>
//        </Reactstrap.Col>
//      </Reactstrap.Row>
//      )}
//    </Reactstrap.Container>
//  );
//}

// getTools().length / 3
const numberOfRows = 5;

function ToolsList(props) {
  return (

     Array(numberOfRows).fill().map((_, rowIndex) => (
         <Reactstrap.Row key={rowIndex}>
          {
            getTools().slice(rowIndex * 3, (rowIndex *3) + 3).map(tool => (
             <Reactstrap.Col xs="12" lg="4">
               <ToolPreview key={tool.shortName} {...tool} />
             </Reactstrap.Col>
           ))}
         </Reactstrap.Row>
     ))
   );
}



//const Wrapper = styled.div`
//  display: grid;
//  grid-template-columns: repeat(1, 1fr);
//  gap: 10px;
//  @media (min-width: ${breakpoints.sm}) {
//    grid-template-columns: repeat(2, 1fr);
//  }
//  @media (min-width: ${breakpoints.md}) {
//    grid-template-columns: repeat(3, 1fr);
//  }
//`;

export default ToolsList;