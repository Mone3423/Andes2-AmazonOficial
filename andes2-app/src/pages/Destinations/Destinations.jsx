import React,{useEffect} from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Col, Container, Row,Accordion } from 'react-bootstrap'
import { destinationsData } from '../../utils/data'
import Cards from '../../components/Cards/Cards'

const Destinations = () => {

  useEffect(()=>{
    document.title =" Destinations  "
    window.scroll(0, 0)
  },[])


  return (
    <>
        <Breadcrumbs title="Destinations" pagename="Destinations" />

        <section className='py-5'>
            <Container>
                <Row>
                 {destinationsData.map((destination, inx) => {
                  return (
                    <Col md="3" sm="6" key={inx} className='pb-4'>
                    <Cards destination={destination} key={inx} />
                    </Col>
                  );
                })}

                </Row>
            </Container>
  
        </section>
        <section className="faq-section py-5">
        <Container>
          <h2 className="font-bold mb-4 h4">FAQs</h2>
          <Accordion defaultActiveKey="0">
            {/* Accede a las FAQs de tour con tour.faqs */}
            {destinationsData.faqs && destinationsData.faqs.map((faq, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>


    </>
  )
}

export default Destinations