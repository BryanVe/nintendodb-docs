import { FC } from 'react';
import { List } from '@material-ui/core';
import { RouteProps, matchPath } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

import NavigationListItem from '../NavigationListItem'

interface IProps {
    depth: number
    pages?: RouteConfig[]
    items?: RouteConfig[]
    router: RouteProps
}

interface ChildRoutes {
    depth: number
    page: RouteConfig
    items: RouteConfig
    router: RouteProps
}

const reduceChildRoutes = (childRoutes: ChildRoutes) => {
    const { router, items, page, depth } = childRoutes;
  
    if (page.children) {
      const open = matchPath(router!.location!.pathname, {
        path: page.href,
        exact: false
      });
  
      items.push(
        <NavigationListItem
          depth={depth}
          icon={page.icon}
          key={page.title}
          open={Boolean(open)}
          title={page.title}
        >
          <NavigationList
            depth={depth + 1}
            pages={page.children}
            router={router}
          />
        </NavigationListItem>
      );
    } else {
      items.push(
        <NavigationListItem
          depth={depth}
          icon={page.icon}
          key={page.title}
          href={page.href}
          title={page.title}
        />
      );
    }
  
    return items;
  };

const NavigationList: FC<IProps> = (props) => {
    const { pages, items, ...rest } = props;
  
    return (
      <List>
        {pages!.reduce(
          (items, page) => reduceChildRoutes({ items, page, ...rest }),
          []
        )}
      </List>
    );
};

export default NavigationList