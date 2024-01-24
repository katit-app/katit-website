import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { AuthContextProvider } from './src/context/AuthProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>
    <AuthContextProvider>
      {element}
    </AuthContextProvider>
  </NotificationProvider>
);
