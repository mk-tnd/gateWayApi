const ROUTES = [
  {
    url: '/api/v1/restaurants/:restaurantId.json',
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
    }
  },
  {
    url: '/api/v1/restaurants/:restaurantId/menus/:menuName/short.json',
    proxy: {
      target: "http://localhost:3003",
      changeOrigin: true,
    }
  },
  {
    url: '/api/v1/restaurants/:restaurantId/menus/:menuName/full.json',
    proxy: {
      target: "http://localhost:3003",
      changeOrigin: true,
    }
  },
]

 export default ROUTES;