import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import fotorecentes from 'assets/fotosrecentes.png'

import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const Photos: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Fotos | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <section>
          <div className="pt-4 pb-4 d-flex justify-content-center">
            <img src={fotorecentes} alt="Fotos Atuais" className="img-fluid" />
          </div>
        </section>
      </Container>
    </>
  )
}

export default memo(Photos)
