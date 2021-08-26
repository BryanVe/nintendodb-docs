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
      },
      {
        title: 'AffiliatedHistorial',
        href: '/tables/affiliated-historial',
      },
      {
        title: 'Affiliates',
        href: '/tables/affiliates',
      },
      {
        title: 'AffiliatesAgency',
        href: '/tables/affiliates-agency',
      },

      {
        title: 'AffilliateDriverInformation',
        href: '/tables/affiliate-driver-information',
      },
      {
        title: 'AsignedStaffing',
        href: '/tables/asigned-staffing',
      },
      {
        title: 'BaseTariffs',
        href: '/tables/base-tariffs',
      },
      {
        title: 'Branches',
        href: '/tables/branches',
      },
      {
        title: 'Cities',
        href: '/tables/cities',
      },

      {
        title: 'ClientTariffs',
        href: '/tables/client-tariffs',
      },
      {
        title: 'Countries',
        href: '/tables/countries',
      },
      {
        title: 'CSVHistorial',
        href: '/tables/csv-historial',
      },
      {
        title: 'DangerPlaces',
        href: '/tables/danger-places',
      },
      {
        title: 'Enterprises',
        href: '/tables/enterprises',
      },

      {
        title: 'FifoOrders',
        href: '/tables/fifo-orders',
      },
      {
        title: 'GeneralTypes',
        href: '/tables/general-types',
      },
      {
        title: 'Incidence',
        href: '/tables/incidence',
      },
      {
        title: 'IncidenceRegistry',
        href: '/tables/incidence-registry',
      },
      {
        title: 'LocationAffiliate',
        href: '/tables/location-affiliate',
      },

      {
        title: 'LocationBranch',
        href: '/tables/location-branch',
      },
      {
        title: 'OrdersImages',
        href: '/tables/order-images',
      },
      {
        title: 'OrderService',
        href: '/tables/order-service',
      },
      {
        title: 'OrderServiceCommentary',
        href: '/tables/order-service-commentary',
      },
      {
        title: 'OrderServiceHistorial',
        href: '/tables/order-service-historial',
      },

      {
        title: 'Orders',
        href: '/tables/orders',
      },
      {
        title: 'OrdersNoLocated',
        href: '/tables/orders-no-located',
      },
      {
        title: 'OriginalOrder',
        href: '/tables/original-order',
      },
      {
        title: 'PackageSizes',
        href: '/tables/package-sizes',
      },
      {
        title: 'PauseAffiliate',
        href: '/tables/pause-affiliate',
      },

      {
        title: 'Routes',
        href: '/tables/routes',
      },
      {
        title: 'Roles',
        href: '/tables/roles',
      },
      {
        title: 'Sectors',
        href: '/tables/sectors',
      },
      {
        title: 'Services',
        href: '/tables/services',
      },
      {
        title: 'Step',
        href: '/tables/step',
      },

      {
        title: 'Stock',
        href: '/tables/stock',
      },
      {
        title: 'Users',
        href: '/tables/users',
      },
      {
        title: 'VehicleBrands',
        href: '/tables/vehicle-brands',
      },
      {
        title: 'VehicleModels',
        href: '/tables/vehicle-models',
      },
      {
        title: 'Vehicles',
        href: '/tables/vehicles',
      },
      {
        title: 'Warehouse',
        href: '/tables/warehouse',
      },
      {
        title: 'Zonas',
        href: '/tables/zonas',
      }
    ]
  }
];

export default navigationConfig;
