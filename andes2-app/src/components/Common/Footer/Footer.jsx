import React, { useState } from "react";
import "../Footer/footer.css"
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Company </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/about-us">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/blog">Blog</NavLink>
                </ListGroup.Item>

                <div className="d-flex align-items-top ">
                  
                  <h4 className="mt-lg-0 mt-sm-3 me-3">Follow us</h4>

                  <a href="https://www.facebook.com/Andes2Amazon/" target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/andes_2_amazon/" target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCIIeRPczn1QVsA5ByspArbQ" target="_blank" rel="noopener noreferrer" className="me-3">
                    <i className="bi bi-youtube"></i>
                  </a>

                </div>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Explore </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/tours">Tour Listings</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/destinations"> Destination</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/tours#faqs-section"> FAQ</NavLink>
                </ListGroup.Item>


              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Quick Link </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/"> Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/contact-us"> Contact Us </NavLink>
                </ListGroup.Item>


              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>

              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-3"></i>
                <p className="pb-2"> Calle Viluyo #329 Zona Belen</p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-envelope me-3"></i>
                <a target="_blank" href="mailto:go@a2a.bo" className="d-block" rel="noopener noreferrer">go@a2a.bo</a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-whatsapp me-3"></i>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=59171969465&text&type=phone_number&app_absent=0" className="d-block" rel="noopener noreferrer">+591 719-69465</a>
              </div>

            </Col>
          </Row>
          <Row className="py-2 bdr mt-3">
            <Col className="col copyright">
              <p className="text-light">   @ 2024. All rights reserved </p>
            </Col>
          </Row>

        </Container>
      </footer>

      <div id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}>
        <i className="bi bi-arrow-up"></i>

      </div>
    </>
  );
};

export default Footer;
