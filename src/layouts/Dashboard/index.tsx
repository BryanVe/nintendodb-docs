import { FC, useState, Suspense } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { LinearProgress } from '@material-ui/core';

import { NavBar, TopBar } from './components';
import useStyles from './styles'

const Dashboard: FC<RouteConfigComponentProps> = (props) => {
  const { route } = props;
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState<boolean>(false);

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return (
      <div className={classes.root}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <div className={classes.container}>
          <main className={classes.content}>
            <TopBar
              className={classes.topBar}
              onOpenNavBarMobile={handleNavBarMobileOpen}
            />
            <Suspense fallback={<LinearProgress />}>
              {renderRoutes(route?.routes)}
            </Suspense>
          </main>
        </div>
      </div>
  );
};

export default Dashboard;
