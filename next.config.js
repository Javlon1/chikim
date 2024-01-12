module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://17c0fff2630f7e23b56b09b637923e78.serveo.net/:path*',
      },

      {
        source: '/:path*',
        destination: '/404', // Перенаправляем все остальные запросы на страницу 404
      },
    ];
  },

  images: {
    domains: ["www.shutterstock.com"], // Домен сайта
  },
};
