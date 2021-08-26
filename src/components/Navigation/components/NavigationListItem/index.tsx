/* eslint-disable react/display-name */
import { useState, ReactNode, FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, Button, Collapse } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import clsx from 'clsx';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import useStyles from './styles'
interface IProps {
  title?: string
  href?: string
  depth: number
  children?: ReactNode
  className?: string
  open?: boolean
  icon?: SvgIconComponent
}

const NavigationListItem: FC<IProps> = props => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  const style = {
    paddingLeft: 8
  };

  if (depth > 0) {
    style.paddingLeft = 32 + 8 * depth;
  }

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
      >
        <Button
          disableRipple
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open ? (
            <ExpandLessIcon
              className={classes.expandIcon}
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              className={classes.expandIcon}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        className={clsx(classes.itemLeaf, className)}
        disableGutters
      >
        <Button
          disableRipple
          component={RouterLink}
          to={href ? href : ''}
          href={href ? href : ''}
          activeClassName={classes.active}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          exact
          style={style}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
        </Button>
      </ListItem>
    );
  }
};

export default NavigationListItem;
