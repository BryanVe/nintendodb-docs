import { FC } from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import {
  ITableColumn,
  ITableAttribute
} from 'types'
import useStyles from './styles'

interface IProps {
    className?: string
    attributes: ITableAttribute[]
}

const columns: ITableColumn[] = [
  {
      title: 'Nombre',
      value: 'name'
  },
  {
      title: 'Tipo',
      value: 'type'
  },
  {
      title: 'Descripción',
      value: 'description'
  }
]

const DBTable: FC<IProps> = (props) => {
  const { attributes } = props;
  const classes = useStyles();

  const getTableHead = () => (
    <TableHead>
      <TableRow>
        {columns.map(({ title, value, align = 'left' }) => (
          <TableCell key={value} align={align}>
            <Typography variant='h5'>
              {title}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.card}>
        <CardContent className={classes.content}>
            <Table>
              {getTableHead()}
              <TableBody>
                {attributes.map((element, index) => (
                  <TableRow
                    key={index}
                    hover
                  >
                    {columns.map(({ value, align = 'left' }) => (
                      <TableCell key={value} align={align}>
                        <Typography variant='body1'>
                          {element[value]}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DBTable;
