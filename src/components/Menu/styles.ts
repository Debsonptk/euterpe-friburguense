import styled from 'styled-components'

export const BgMenu = styled.div`
  border-bottom: 2px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`

export const SizeLogo = styled.img`
  width: 140px;
  aspect-ratio: 1;
`
export const LinkStyle = styled.div`
  transition:
    text-decoration 0.2s,
    transform 0.2s;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`
