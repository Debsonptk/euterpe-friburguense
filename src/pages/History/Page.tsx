import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const History: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('História | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <h1 className="text-center pt-3">História</h1>
      </Container>
    </>
  )
}

export default memo(History)
