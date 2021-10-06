/**
 *
 * Asynchronously loads the component for MasterSidebar
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import AppPreloader from 'components/AppPreloader';

export default loadable(() => import('./index'), {
  fallback: <AppPreloader />,
});
