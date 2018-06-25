/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLDate as DateType,
} from 'graphql';

const VersionType = new ObjectType({
  name: 'Version',
  fields: () => ({
    id: { type: IntType },
    version_number: { type: StringType},
    server: { type: StringType}
  })
});


export default VersionType;
