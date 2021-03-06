import { ColorPalette, Theme } from '@xmpie/types'

export const colors: ColorPalette = {
  primary: '#fc4c02',
  primary1: '#f44901',
  primary2: '#feb79a',
  secondary: '#ecedee',
  mainText: '#101820',
  mainText1: '#27313b',
  bodyText: '#656b72',
  bodyText1: '#757b81',
  bodyText2: '#8a8f94',
  borderDark: '#cbd0d5',
  borderLight: '#e1e6ea',
  background: '#dddfe0',
  background1: '#2c3e50',
  background2: '#27313b',
  background4: '#23387e',
  white: '#ffffff',
  error: '#ca0f1c',
  error1: '#fdf5f6',
  warning: '#ff9500',
  success: '#3da00f',
  segmentBus: '#009688',
  duskBlue: '#23387e',
  plum: '#5d295f',
}

export const xmpie: Theme = {
  name: 'xmpie',
  primaryColor: colors.mainText,
  secondaryColor: colors.mainText1,
  btnBackground: colors.primary,
  btnBackgroundHover: colors.primary1,
  inputLabelColor: colors.bodyText,
  inputColor: colors.mainText,
  inputBorderColor: colors.background,
  inputBackgroundColor: colors.background,
  colors,
}
