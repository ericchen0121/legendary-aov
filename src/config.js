/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Database
  // databaseUrl: process.env.DATABASE_URL || 'postgresql://ericchen0121:Ch3n3r1c@legendaryaov.cil5tcqn0xfl.us-west-1.rds.amazonaws.com:5432/legendaryaov',

  databaseUrl: process.env.DATABASE_URL,

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || 'fb',
      secret:
        process.env.FACEBOOK_APP_SECRET || 'fb',
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || null,
      secret: process.env.GOOGLE_CLIENT_SECRET || null,
    },

    // https://apps.twitter.com/
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'tweet',
      consumer_secret:
        process.env.TWITTER_CONSUMER_SECRET || 'tweet',
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: 	process.env.TWITTER_ACCESS_TOKEN_SECRET,
      // app_only_auth: true
    },
    twitch: {
      client_id: process.env.TWITCH_CLIENT_ID
    }
  },
};
