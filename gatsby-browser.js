import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { AuthContextProvider } from './src/context/AuthProvider';
import { CartontextProvider } from './src/context/CartProvider';

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <CartontextProvider>
      <NotificationProvider>
        {element}
      </NotificationProvider>
    </CartontextProvider>
  </AuthContextProvider>
);
