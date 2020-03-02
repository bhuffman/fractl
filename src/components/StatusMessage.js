import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Anime from 'react-anime'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// This is a status message generating component
// -----
// [boolean] transparent: no background color on the message container
// [boolean] noborder: no border on the message container
// [string]   text: what is displayed inside the message
// [boolean] error: display a font-awesome X above message
// [boolean] instant: sets anime.js animation duration to 0
// -----

export default props => (
  <Anime translateY={['-2em', 0]}
    opacity={[0, 1]}
    easing="easeInOutQuart"
    duration={props.instant ? 0 : 850}>
    <Container className={`${props.transparent?'bg-transparent':'bg-light'} my-5 py-5 rounded text-black-50 ${props.noborder || 'border'}`}>
      <Row className="align-items-center text-center">
        <Col>
          {props.error && <FontAwesomeIcon icon={faTimes}
            size="lg"
            color={'#aaa'} />}
          {props.loading && <Spinner animation="grow" variant="secondary" size="sm" className="mb-2" />}
          <p className="my-0">{props.text}</p>
        </Col>
      </Row>
    </Container>
  </Anime>
)