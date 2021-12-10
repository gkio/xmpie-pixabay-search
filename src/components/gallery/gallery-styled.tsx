import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background4};
`

export const Img = styled.img`
  width: 300px;
`
