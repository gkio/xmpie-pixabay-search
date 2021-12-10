export type ColorPalette = {
  primary: string
  primary1: string
  primary2: string
  secondary: string
  mainText: string
  mainText1: string
  bodyText: string
  bodyText1: string
  bodyText2: string
  borderDark: string
  borderLight: string
  background: string
  background1: string
  background2: string
  background4: string
  white: string
  error: string
  error1: string
  warning: string
  success: string
  segmentBus: string
  duskBlue: string
  plum: string
}

export interface Theme {
  name: string
  primaryColor: string
  secondaryColor: string
  btnBackground: string
  btnBackgroundHover: string
  inputLabelColor: string
  inputColor: string
  inputBorderColor: string
  inputBackgroundColor: string
  fontFamily?: string
  colors: ColorPalette
}
