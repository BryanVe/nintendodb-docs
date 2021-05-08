import { FC } from 'react'
import {
    Divider,
    Typography
} from '@material-ui/core'

import { ITableAttribute } from 'types'
import { DBTable } from 'components'
import useStyles from './styles'

interface IProps {
    title: string
    description: string
    attributes: ITableAttribute[]
}

const MainInfoTable: FC<IProps> = (props) => {
    const {
        title,
        description,
        attributes
    } = props
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <Typography variant='h2' className={classes.title}>{title}</Typography>
            <Divider className={classes.divider} />
            <Typography variant='body1' className={classes.description}>{description}</Typography>
            <DBTable attributes={attributes} />
        </div>
    )
}

export default MainInfoTable