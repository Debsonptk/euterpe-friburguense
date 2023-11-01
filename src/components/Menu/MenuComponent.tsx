import { memo, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import logo from 'assets/logomenu.png'

import MenuMobile from 'components/MenuMobile'

import { BgMenu, LinkStyle, SizeLogo } from './styles'

const Menu: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <BgMenu>
      <Container>
        <Row>
          <Col>
            <Link to="/" className="pt-3">
              <SizeLogo src={logo} alt="logo" className="img-fluid" />
            </Link>
          </Col>
          <Col className="d-flex d-none d-lg-flex align-items-end">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-nav">
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/">
                    Home
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/historia">
                    História
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/musicos">
                    A Banda
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/musicos">
                    Banda Escola
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/fotos">
                    Fotos
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/eventos">
                    Eventos
                  </Link>
                </LinkStyle>
                <LinkStyle>
                  <Link className="navbar-brand px-2" to="/seja-socio">
                    Seja Sócio
                  </Link>
                </LinkStyle>
              </div>
            </nav>
          </Col>
          <Col className="d-flex align-items-end justify-content-end d-none d-lg-flex">
            <Link
              to="https://www.instagram.com/bandaeuterpefriburguense1863/"
              className="pb-3 px-2"
              target="_blank"
            >
              <FaInstagram size={30} color="#057444" />
            </Link>
            <Link
              to="https://www.facebook.com/BandaEuterpeFriburguense"
              className="pb-3 px-2"
              target="_blank"
            >
              <FaFacebook size={30} color="#057444" />
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-end d-lg-none">
            <div>
              <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
              />
              <GiHamburgerMenu
                size={30}
                color="#057444"
                type="button"
                onClick={() => setMenuIsVisible(true)}
              />{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </BgMenu>
  )
}

export default memo(Menu)
