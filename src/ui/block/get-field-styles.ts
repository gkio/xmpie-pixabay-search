import { css } from 'styled-components'
import { Indent } from './types'

type Props = {
  field: string
  vertical?: Indent
  horizontal?: Indent
  top?: Indent
  left?: Indent
  right?: Indent
  bottom?: Indent
}

export function getFieldStyles({
  field,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0,
  vertical = 0,
  horizontal = 0,
}: Props) {
  const topValue = top || vertical
  const leftValue = left || horizontal
  const bottomValue = bottom || vertical
  const rightValue = right || horizontal

  const isVertical = topValue === bottomValue
  const isHorizontal = leftValue === rightValue
  const isZeroPadding = isVertical && isHorizontal && topValue === 0

  const resolveValue = (value: Indent) => (value === 'auto' ? 'auto' : value + 'px')

  switch (true) {
    case isVertical && isHorizontal:
      return css`
        ${field}: ${resolveValue(topValue)} ${resolveValue(leftValue)};
      `
    case isZeroPadding:
      return css`
        ${field}: 0;
      `
    default:
      return css`
        ${field}: ${resolveValue(topValue)} ${resolveValue(rightValue)} ${resolveValue(
          bottomValue,
        )} ${resolveValue(leftValue)};
      `
  }
}
