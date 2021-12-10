import styled from 'styled-components'
import { getFieldStyles } from './get-field-styles'
import { Indent } from './types'

type Props = {
  isFullWidth?: boolean
  paddingVertical?: number
  paddingHorizontal?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number

  marginVertical?: Indent
  marginHorizontal?: Indent
  marginLeft?: Indent
  marginRight?: Indent
  marginTop?: Indent
  marginBottom?: Indent
}

export const Block = styled.div<Props>`
  ${(props) => (props.isFullWidth ? 'width: 100%;' : '')}
  ${(props) => {
    return getFieldStyles({
      field: 'padding',
      vertical: props.paddingVertical,
      horizontal: props.paddingHorizontal,
      top: props.paddingTop,
      left: props.paddingLeft,
      right: props.paddingRight,
      bottom: props.paddingBottom,
    })
  }};

  ${(props) => {
    const top = props.marginVertical || props.marginTop
    const left = props.marginHorizontal || props.marginLeft
    const bottom = props.marginVertical || props.marginBottom
    const right = props.marginHorizontal || props.marginRight

    return getFieldStyles({
      field: 'margin',
      top,
      left,
      right,
      bottom,
    })
  }};
`
