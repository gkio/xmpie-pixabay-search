import styled from 'styled-components'
import { strongWeightText } from '@xmpie/style'

export const StyledButton = styled.button`
  ${strongWeightText};
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.plum};
  min-height: 45px;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  padding: 0 10px;
  border: none;
}
`
