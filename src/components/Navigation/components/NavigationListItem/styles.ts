import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    item: {
      display: 'block',
      paddingTop: 0,
      paddingBottom: 0
    },
    itemLeaf: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: colors.blueGrey[800],
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%'
    },
    buttonLeaf: {
      color: theme.palette.white.main,
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightRegular,
      '&.depth-0': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      }
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    expandIcon: {
      marginLeft: 'auto',
      height: 16,
      width: 16
    },
    active: {
      color: theme.palette.white.main,
      backgroundColor: theme.palette.primary.dark,
      '& $icon': {
        color: theme.palette.white.main,
      },
      '& .MuiButton-label': {
        fontWeight: 600
      }
    }
  }));
  
  export default useStyles