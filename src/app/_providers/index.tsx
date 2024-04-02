'use client';

import React from 'react';

import { ThemeProvider as NextThemesProvider } from '@/components/theme-provider';

import { AuthProvider } from '../_providers/Auth';
import { CartProvider } from '../_providers/Cart';

import { themeLocalStorageKey } from './Theme/ThemeSelector/types';
import { ThemeProvider } from './Theme';

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={themeLocalStorageKey}
    >
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </NextThemesProvider>
  );
};
