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
import BuildViewer from './Build';
const title = 'Item Builds';

function action(context, params) {
  return {
    chunks: ['build'],
    title,
    component: (
      <Layout>
        <BuildViewer
          title={title}
          params={params}
        />
      </Layout>
    ),
  };
}

export default action;
