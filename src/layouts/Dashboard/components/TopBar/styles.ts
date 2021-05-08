
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: '0px 1px 5px 0px rgb(215 215 215 / 75%)',
      WebkitBoxShadow: '0px 1px 5px 0px rgb(215 215 215 / 75%)'
    },
    flexGrow: {
      flexGrow: 1
    },
    logoutButton: {
      marginLeft: theme.spacing(1)
    }
  }));

export default useStyles