import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const BackgroundContainer = styled(Card)`
  background-color: #f7f7f7;
  padding: 20px 30px 20px 30px;
  border: none;
  color: #444;
`
export const TextSize = styled.p`
  font-size: 14px;
  color: #858c94;
`
export const Button = styled.button`
  padding: 0px 30px 0px 30px;
  border-radius: 40px;
  background-color: #f7f7f7;
  color: #057444;
  border: 1px solid #057444;
  font-size: 20px;

  &&:hover {
    color: #fff;
    background-color: #057444;
  }
`
