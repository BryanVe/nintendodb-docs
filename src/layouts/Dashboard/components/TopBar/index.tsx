import clsx from 'clsx';
import {
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import useStyles from './styles'

interface IProps {
  onOpenNavBarMobile: () => void
  className: string
}

const TopBar: React.FC<IProps> = props => {
  const { onOpenNavBarMobile, className } = props;

  const classes = useStyles();

  const handleLogout = (): void => {
    console.log('logout');
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="primary"
      position='fixed'
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="primary"
            onClick={onOpenNavBarMobile}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
        <div className={classes.flexGrow} />
        <IconButton
            color="primary"
            className={classes.logoutButton}
            onClick={handleLogout}
          >
            <ExitToAppRoundedIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
