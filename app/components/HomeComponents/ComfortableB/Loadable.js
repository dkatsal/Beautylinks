/**
 *
 * Asynchronously loads the component for ComfortableB
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import AppPreloader from 'components/AppPreloader';

export default loadable(() => import('./index'), {
  fallback: <AppPreloader />,
});
