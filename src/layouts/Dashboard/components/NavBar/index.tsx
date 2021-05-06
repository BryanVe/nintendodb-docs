import { FC } from 'react';
import clsx from 'clsx';
import {
  Divider,
  Drawer,
  Hidden,
  Paper
} from '@material-ui/core';

import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
import whiteChazkiLogo from 'assets/images/white_chazki_logo.png'
import useStyles from './styles';



interface IProps {
  onMobileClose: () => void
  className: string
  openMobile: boolean
}

const NavBar: FC<IProps> = (props) => {
  const { openMobile, onMobileClose, className } = props;
  const classes = useStyles();

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.logoWrapper}>
        <img
          alt='Chazki'
          src={whiteChazkiLogo}
          className={classes.logo}
        />
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map((list) => (
          <Navigation
            component='div'
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          <div className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          className={clsx(classes.root, className)}
          elevation={1}
          square>
          {navbarContent}
        </Paper>
      </Hidden>
    </>
  );
};

export default NavBar;
