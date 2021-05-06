/* eslint-disable react/no-multi-comp */
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

import { NavigationList } from './components';
import useStyles from './styles'

interface IProps {
  title?: string
  className?: string
  pages?: RouteConfig[]
  component: React.ElementType
}

const Navigation: FC<IProps> = (props) => {
  const { title, pages, className, component: Component, ...rest } = props;

  const classes = useStyles();
  const router = useHistory();

  return (
    <Component
      {...rest}
      className={clsx(classes.root, className)}
    >
      {title && <Typography variant="overline" className={classes.title}>{title}</Typography>}
      <NavigationList
        depth={0}
        pages={pages}
        router={router}
      />
    </Component>
  );
};

export default Navigation;
