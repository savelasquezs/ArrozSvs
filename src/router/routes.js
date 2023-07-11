const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/orders',
        children: [
          {
            path: 'details',
            component: () => import('src/pages/orders/OrderDetail.vue'),
          },
          {
            path: 'today',
            component: () => import('src/pages/orders/TodayOrders.vue'),
          },
        ],
        component: () => import('src/pages/OrdersPage.vue'),
      },
      {
        path: '/products',
        component: () => import('src/pages/ProductsPage.vue'),
        children: [
          {
            path: '/details',
            component: () => import('src/pages/orders/OrderDetail.vue'),
          },
          {
            path: '/today',
            component: () => import('src/pages/orders/TodayOrders.vue'),
          },
        ],
      },
      {
        path: '/bookings',
        component: () => import('src/pages/BookingsPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
