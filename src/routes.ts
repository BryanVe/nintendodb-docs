import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'

import { DashboardLayout } from 'layouts'

const routes: RouteConfig[] = [
    {
        path: '',
        component: DashboardLayout,
        routes: [
            {
                path: '/tables/activities',
                exact: true,
                component: lazy(() => import('modules/tables/Activities'))
            }
        ]
    }
]

export default routes