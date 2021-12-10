import styled from 'styled-components'

export const Content = styled.div<{ isFullHeight: boolean }>`
  background-color: ${(props) => props.theme.colors.background2};
  height: ${(props) => (props.isFullHeight ? '100vh' : '80px')};
  transition: height 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  flex: 0 0 40%;
  display: flex;
  justify-content: space-between;
`
