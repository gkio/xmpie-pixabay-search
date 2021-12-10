import styled from 'styled-components'
import { mediumWeightText, normalWeightText } from '@xmpie/style'

export const StyledInput = styled.input`
  ${mediumWeightText};
  border-radius: 7px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  font-size: 1.4rem;
  padding: 20px;
  min-width: 200px;
  line-height: 20px;
  letter-spacing: normal;
  color: ${(props) => props.theme.inputColor};
  outline: none;
  height: 30px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.inputBorderColor};


  &::placeholder {
    color: ${(props) => props.theme.inputLabelColor};
    font-size: 1.4rem;
    line-height: 20px;
    ${normalWeightText};
  }
}
`
