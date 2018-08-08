/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../../components/Layout';
import FeaturedChannelContainer from './FeaturedChannelContainer';
import { ROUTE_CONSTANTS } from '../../../../constants'
const title = ROUTE_CONSTANTS.featured_channel_title

function action(context, params) {
  return {
    title,
    component: (
      <Layout>
        // <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="./js/slick.css" /> // in public folder, with custom css
        <FeaturedChannelContainer
          params={params}
        />
      </Layout>
    ),
  };
}

export default action;
