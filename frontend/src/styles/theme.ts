import 'styled-components';

export const theme = {
  black: '#000',
  blackOpacity: 'rgba(0, 0, 0, 0.5)',
  blackRaisin: '#202024',
  greenCharleson: '#29292C',
  arsenic: '#404045',
  grayGranite: '#62626A',
  grayLight: '#D4D4D8',
  platinum: '#E4E4E7',
  white: '#FFFFFF',
  indigoLavander: '#8257E5',
  violetsAreBlue: '#996DFF',
  vodka: '#C1ABF2'
}

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}