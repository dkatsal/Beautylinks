/*
 * GreetingPopup Messages
 *
 * This contains all the text for the GreetingPopup component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.GreetingPopup';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the GreetingPopup component!',
  },
});
