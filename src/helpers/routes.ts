import { lazy } from 'react'
import { LoadRoutes, IRoute } from 'types'

export const loadLayoutRoutes: LoadRoutes = (navigationConfig, routes) => {
  for(const element of navigationConfig) {
    if(element.pages)
      loadLayoutRoutes(element.pages, routes)
    else {
      const route: IRoute = {
        path: element.href ? element.href : '',
        exact: true,
        component: lazy(() => import(`modules/tables/${element.title}`))
      }

      routes.push(route)
    }
  }
}