import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core'
import WebFont from 'webfontloader'

import theme from 'theme'
import App from './App';
import './index.css';

WebFont.load({
  google: {
    families: ['Lato:400,500,600,700']
  }
})

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);