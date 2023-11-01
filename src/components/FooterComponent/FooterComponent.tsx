import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import logofooter from 'assets/escolafooter.png'

import { ContainerBackground } from './styles'

const Footer: React.FC = () => {
  return (
    <ContainerBackground>
      <Container>
        <Row className="d-flex row-cols-1 row-cols-md-2 justify-content-between">
          <Col className="d-flex pt-3">
            <div>
              <div className="d-flex">
                <FaMapMarkerAlt size={22} color="white" />
                <p className="text-white px-2">
                  Av Euterpe Friburguense, 53 Centro - Nova Friburgo-RJ
                </p>
              </div>
              <div className="d-flex">
                <HiOutlineMailOpen size={22} color="white" />
                <p className="text-white px-2">realbandaeuterpe@hotmail.com</p>
              </div>
              <div className="d-flex">
                <FaPhone size={22} color="white" />
                <p className="text-white px-2">(22) 2521-1085</p>
              </div>
            </div>
          </Col>
          <Col>
            <Link to="/banda-escola">
              <img src={logofooter} alt="logo" className="img-fluid" />
            </Link>
          </Col>
        </Row>
      </Container>
    </ContainerBackground>
  )
}

export default memo(Footer)
