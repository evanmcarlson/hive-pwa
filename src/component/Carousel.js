import react from 'react';
import * as Reactstrap from 'react-bootstrap'

const Carousel = () => {
    return(
        <div className="App">
            <Reactstrap.Carousel>
              <Reactstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.usfca.edu/sites/default/files/styles/in_content_image_panel_775x435/public/usf_magazine/usfmagazine-summer2019-feature-curapersonalis-innovationhive_1.jpg?itok=yQlmoPB5"
                  alt="First slide"
                />
                <Reactstrap.Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Reactstrap.Carousel.Caption>
              </Reactstrap.Carousel.Item>
              <Reactstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.usfca.edu/sites/default/files/usf_magazine/usfmagazine-summer2019-feature-curapersonalis-innovationhive_2.jpg"
                  alt="Second slide"
                />

                <Reactstrap.Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Reactstrap.Carousel.Caption>
              </Reactstrap.Carousel.Item>
              <Reactstrap.Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.usfca.edu/sites/default/files/usf_magazine/usfmagazine-summer2019-feature-curapersonalis-biotech.jpg"
                  alt="Third slide"
                />

                <Reactstrap.Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Reactstrap.Carousel.Caption>
              </Reactstrap.Carousel.Item>
            </Reactstrap.Carousel>
        </div>
    )
}

export default Carousel;