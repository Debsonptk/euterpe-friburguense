import { memo, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import fotosantigas from 'assets/fotosantigas.png'
import fotosrecentes from 'assets/fotosrecentes.png'
import fa1 from 'assets/OldPhotos/fa1.png'
import fa10 from 'assets/OldPhotos/fa10.png'
import fa11 from 'assets/OldPhotos/fa11.png'
import fa12 from 'assets/OldPhotos/fa12.png'
import fa2 from 'assets/OldPhotos/fa2.png'
import fa3 from 'assets/OldPhotos/fa3.png'
import fa4 from 'assets/OldPhotos/fa4.png'
import fa5 from 'assets/OldPhotos/fa5.png'
import fa6 from 'assets/OldPhotos/fa6.png'
import fa7 from 'assets/OldPhotos/fa7.png'
import fa8 from 'assets/OldPhotos/fa8.png'
import fa9 from 'assets/OldPhotos/fa9.png'
import desfile from 'assets/RecentPhotos/desfilegalery.png'
import fr1 from 'assets/RecentPhotos/fr1.jpeg'
import fr10 from 'assets/RecentPhotos/fr10.jpeg'
import fr2 from 'assets/RecentPhotos/fr2.jpeg'
import fr3 from 'assets/RecentPhotos/fr3.jpeg'
import fr4 from 'assets/RecentPhotos/fr4.jpeg'
import fr5 from 'assets/RecentPhotos/fr5.jpeg'
import fr6 from 'assets/RecentPhotos/fr6.jpeg'
import fr7 from 'assets/RecentPhotos/fr7.jpeg'
import fr8 from 'assets/RecentPhotos/fr8.jpeg'
import fr9 from 'assets/RecentPhotos/fr9.jpeg'
import sede from 'assets/sede.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const RecentPhotos: string[] = [
  fr1,
  fr2,
  fr3,
  fr4,
  fr5,
  desfile,
  fr6,
  fr7,
  fr8,
  fr9,
  fr10,
  sede,
]
const OldPhotos: string[] = [
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa10,
  fa11,
  fa12,
]

const Photos: React.FC = () => {
  const setTitle = useTitle()
  const [isLoading] = useState(false)

  useEffect(() => {
    setTitle('Fotos | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        {isLoading && <p>Loading</p>}
        {!isLoading && (
          <>
            <section>
              <div className="pt-5 pb-2 d-flex justify-content-center">
                <img
                  src={fotosrecentes}
                  alt="Fotos Atuais"
                  className="img-fluid"
                />
              </div>
              <Row className="d-flex row-cols-1 row-cols-md-2  g-5 pb-4">
                {RecentPhotos &&
                  RecentPhotos.map((recentPhoto) => (
                    <Col key={recentPhoto} className="d-flex">
                      <img
                        src={recentPhoto}
                        alt={`Foto ${recentPhoto}`}
                        className="img-fluid"
                      />
                    </Col>
                  ))}
              </Row>
            </section>
            <section className="pb-5">
              <div className="pt-5 pb-2 d-flex justify-content-center">
                <img
                  src={fotosantigas}
                  alt="Fotos Atuais"
                  className="img-fluid"
                />
              </div>
              <Row className="d-flex row-cols-1 row-cols-md-2  g-5">
                {OldPhotos &&
                  OldPhotos.map((oldPhoto) => (
                    <Col key={oldPhoto} className="d-flex">
                      <img
                        src={oldPhoto}
                        alt={`Foto ${oldPhoto}`}
                        className="img-fluid"
                      />
                    </Col>
                  ))}
              </Row>
            </section>
          </>
        )}
      </Container>
      <FooterComponent />
    </>
  )
}

export default memo(Photos)
