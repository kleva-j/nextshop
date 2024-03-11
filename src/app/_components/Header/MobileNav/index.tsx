/* eslint-disable import/extensions */
import type { FC } from 'react';

import { Button } from '@/components/ui/button';

import { Header } from '../../../../payload/payload-types';

export const MobileNav: FC<{ header: Header }> = ({ header }) => {
  const navItems = header?.navItems || [];

  return <Button className="rounded-none uppercase font-normal">Default Button</Button>;
};
