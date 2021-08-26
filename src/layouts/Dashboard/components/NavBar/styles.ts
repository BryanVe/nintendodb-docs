import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      maxWidth: 270,
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: 7,
        backgroundColor: theme.palette.primary.dark
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.secondary.light,
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.palette.secondary.dark
      }
    },
    content: {
      padding: theme.spacing(2),
      flexGrow: 1
    },
    divider: {
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.primary.light
    },
    navigation: {
      marginTop: theme.spacing(2)
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
    }
}));

export default useStyles