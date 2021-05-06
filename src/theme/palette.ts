import { colors } from '@material-ui/core';
declare module '@material-ui/core/'

const white = '#FFFFFF';
const black = '#000000';

const palette = {
  black,
  white: {
    main: white
  },
  primary: {
    contrastText: white,
    dark: '#1F71D6',
    main: '#307FE2',
    light: '#4C91E6'
  },
  secondary: {
    contrastText: white,
    dark: '#39BB25',
    main: '#44D62C',
    light: '#58DA44'
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};

export default palette;