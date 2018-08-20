/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { ROUTE_CONSTANTS } from './routes_constants';

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'draft' */ './draft'),
    },
    {
      path: '/landing',
      load: () => import(/* webpackChunkName: 'landing' */ './landing'),
    },
    {
      path: '/hero',
      load: () => import(/* webpackChunkName: 'hero' */ './hero'),
    },
    {
      path: '/video',
      load: () => import(/* webpackChunkName: 'draft' */ './draft'),
    },

    {
      path: '/video/hero/:hero',
      load: () => import(/* webpackChunkName: 'draft' */ './draft'),
    },
    {
      path: '/video/:video_search_term',
      load: () => import(/* webpackChunkName: 'draft' */ './draft'),
    },
    {
      path: '/channels',
      load: () => import(/* webpackChunkName: 'draft' */ './draft/channels/featured'),
    },
    {
      path: '/video/channel/:channel_id',
      load: () => import(/* webpackChunkName: 'draft' */ './draft'),
    },
    {
      path: '/build/edit/:build_id',
      load: () => import(/* webpackChunkName: 'buildcreator' */ './buildCreator/create'),
    },
    {
      path: '/build/all',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator/all'),

    },
    {
      path: '/build/me',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator/me'),
    },
    {
      path: '/build/create',
      load: () => import(/* webpackChunkName: 'buildcreator' */ './buildCreator/create'),
    },

    {
      path: '/build/all',
      load: () => import(/* webpackChunkName: 'buildcreator' */ './buildCreator'),
    },
    // {
    //   path: '/build/id/:build_id',
    //   load: () => import(/* webpackChunkName: 'build' */ './buildCreator'),
    // },
    {
      path: '/build/hero/:hero',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator'),
    },
    {
      path: '/build/hero/:hero/me',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator/me'),
    },
    {
      path: '/build/user/:user_id',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator'),
    },
    {
      path: '/build',
      load: () => import(/* webpackChunkName: 'build' */ './buildCreator'),
    },
    {
      path: '/news',
      load: () => import(/* webpackChunkName: 'draft' */ './news'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/players',
      load: () => import(/* webpackChunkName: 'buildcreator' */ './players'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title}` || `${ROUTE_CONSTANTS}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
