import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        white: Palette['primary'];
    }
    interface PaletteOptions {
        white: PaletteOptions['primary'];
    }
}

const customTheme = createMuiTheme({
    palette,
    typography,
    overrides,
});

export default customTheme;
