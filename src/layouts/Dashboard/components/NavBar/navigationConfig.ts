import { ReactNode } from "react";

interface NavigationConfig {
  title?: string
  href?: string
  pages?: NavigationConfig[],
  children?: ReactNode
}

const navigationConfig: NavigationConfig[] = [
  {
    title: 'Tables',
    pages: [
      {
        title: 'Activities',
        href: '/tables/activities',
      },
      {
        title: 'AffiliateVehicles',
        href: '/tables/affiliate-vehicles',
      }
    ]
  }
];

export default navigationConfig;
