import { makeStyles } from '@material-ui/core';

const navBarWidth = 270

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      overflow: 'hidden'
    },
    topBar: {
      backgroundColor: theme.palette.white.main,
      zIndex: 2,
      width: `calc(100vw - ${navBarWidth}px)`,
      [theme.breakpoints.down('md')]: {
        width: '100vw'
      }
    },
    container: {
      display: 'flex',
      flex: '1 1 auto',
      marginLeft: navBarWidth,
      width: `calc(100vw - ${navBarWidth}px)`,
      paddingTop: 64,
      [theme.breakpoints.down('md')]: {
        width: '100vw',
        marginLeft: 0
      }
    },
    navBar: {
      zIndex: 3,
      width: navBarWidth,
      maxWidth: navBarWidth,
      minWidth: navBarWidth,
      flex: '0 0 auto',
      position: 'fixed',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        position: 'unset'
      }
    },
    content: {
      overflowY: 'auto',
      flex: '1 1 auto'
    }
}));

export default useStyles