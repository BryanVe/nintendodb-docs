import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: theme.spacing(3)
    },
    title: {
      color: theme.palette.white.main
    }
}));

export default useStyles