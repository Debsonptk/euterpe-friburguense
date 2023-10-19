import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <h1 className="text-center pt-3">Euterpe Friburguense</h1>
      </Container>
    </>
  )
}

export default memo(Home)
