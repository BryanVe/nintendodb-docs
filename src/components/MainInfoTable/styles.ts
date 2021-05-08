import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        maxWidth: 850,
        width: '85vw',
        margin: '50px auto',
    },
    divider: {
        margin: theme.spacing(2 ,0)
    },
    title: {
        fontSize: 35
    },
    description: {
        fontSize: 16,
        lineHeight: 1.5,
        marginBottom: theme.spacing(3)
    }
}))

export default useStyles