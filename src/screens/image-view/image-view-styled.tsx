import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const ImageWrapper = styled.img`
  width: 400px;
  box-shadow: 0 0 20px ${(props) => props.theme.colors.duskBlue};
`
