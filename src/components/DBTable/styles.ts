import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiCardContent-root:last-child': {
        padding: 0
      }
    },
    content: {
      padding: 0
    },
    card: {
      border: '1px solid #cfcfcf'
    }
}));

export default useStyles