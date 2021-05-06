import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      overflowY: 'auto'
    },
    content: {
      padding: theme.spacing(2)
    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: 60,
      height: 60
    },
    name: {
      marginTop: theme.spacing(1)
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
      justifyContent: 'center'
    },
    logo: {
      width: 150,
    }
}));

export default useStyles