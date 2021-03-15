import react from 'react';
import * as Reactstrap from 'react-bootstrap';
import ToolsList from './ToolsList';

const Tools = () => {
    return(
        <div className="App" className="bg-light">
            <h1>Tools</h1>
            <Reactstrap.Container className="p-3">
                <ToolsList />
            </Reactstrap.Container>
        </div>
    )
}

export default Tools;