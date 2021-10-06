/*
 * Favorite Messages
 *
 * This contains all the text for the Favorite component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Favorite';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Favorite component!',
  },
});
