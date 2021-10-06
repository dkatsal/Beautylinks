/*
 * Service Messages
 *
 * This contains all the text for the Service container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Service';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Service container!',
  },
});
