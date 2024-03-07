import type { FC } from 'react';

import { Header } from '../../../../payload/payload-types';

export const MobileNav: FC<{ header: Header }> = ({ header }) => {
  const navItems = header?.navItems || [];

  return (
    <button className="border rounded-md px-4 py-2 border-slate-300 bg-transparent text-slate-400">
      index
    </button>
  );
};
