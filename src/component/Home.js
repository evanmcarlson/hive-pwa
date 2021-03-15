import react from 'react';
import * as Reactstrap from 'react-bootstrap';
import Carousel from './Carousel';
import ContentCard from './ContentCard';

const Home = () => {
    return(
        <div className="pt-5 bg-light">
            <Reactstrap.Container className="pt-2">

              <Reactstrap.Row>
                <Reactstrap.Col lg={3} className="bg-white mt-3 p-3 text-left rounded">
                  <h3>Welcome to the Innovation Hive.</h3>
                  <p>
                  The Innovation Hive is the physical and conceptual center of engineering at USF, featuring multiple spaces accessible to the entire USF community. Spaces include an ideation space, a light-fabrication and maker space and a heavy-fabrication and trail space.
                  </p>
                </Reactstrap.Col>
                <Reactstrap.Col lg={9} className="bg-white mt-3 rounded">
                  <Carousel />
                </Reactstrap.Col>
              </Reactstrap.Row>

              <Reactstrap.Row>
                <Reactstrap.Col lg={3} className="bg-white mt-3 p-3 text-left rounded">
                  <h3>Think it. Make it.</h3>
                  <p>
                  Each of these areas will be designed to function as a learning center as well as a work space, and will accommodate computer work as much as physical creation. Most importantly, the entire Innovation Hive will promote cross-campus participation, by welcoming and training any student, faculty, or staff member who wishes to use the equipment or collaborate on a project, and by hosting many interdisciplinary activities.
                  </p>
                </Reactstrap.Col>
                <Reactstrap.Col lg={9} className="bg-white mt-3 p-3 text-left rounded">
                  <h3>Upcoming events</h3>
                  <p>Insert calendar preview</p>
                </Reactstrap.Col>
              </Reactstrap.Row>

            </Reactstrap.Container>
        </div>
    )
}

export default Home;