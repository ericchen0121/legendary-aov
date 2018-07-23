/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import LandingContainer from './LandingContainer';
import { ROUTE_CONSTANTS } from '../../constants'
const title = ROUTE_CONSTANTS.landing_title

function action(context, params) {
  return {
    title,
    component: (
      <Layout>
        <LandingContainer
          params={params}
        />
      </Layout>
    ),
  };
}

export default action;
