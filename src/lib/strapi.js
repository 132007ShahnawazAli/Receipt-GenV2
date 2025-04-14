import { createClient } from '@strapi/sdk-js';

const strapi = createClient({
  url: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
  prefix: '/api',
  store: {
    key: 'strapi_jwt',
    useLocalStorage: true,
    cookieOptions: { path: '/' },
  },
});

export default strapi; 