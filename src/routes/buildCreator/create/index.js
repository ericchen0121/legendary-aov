/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../components/Layout';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import BuildCreatorContainer from './BuildCreatorContainer';
const title = 'Build Creator';

function action() {
  return {
    chunks: ['buildcreator'],
    title,
    component: (
      <Layout>
        <BuildCreatorContainer />
      </Layout>
    ),
  };
}

export default action;
