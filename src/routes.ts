import { RouteConfig } from 'react-router-config'

import dashboardNavigationConfig from 'layouts/Dashboard/components/NavBar/navigationConfig'
import { DashboardLayout } from 'layouts'
import { IRoute } from 'types'
import helpers from 'helpers'

const getRoutes = (): RouteConfig[] => {
  const dashboardRoutes: IRoute[] = []
  helpers.routes.loadLayoutRoutes(dashboardNavigationConfig, dashboardRoutes)
  
  const routes: RouteConfig[] = [
    {
        path: '',
        component: DashboardLayout,
        routes: dashboardRoutes
    }
  ]

  return routes
}

export default getRoutes()