import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import { Header } from '../../../../payload/payload-types';

export const MobileNav: FC<{ header: Header }> = ({ header }) => {
  const navItems = header?.navItems || [];
  const pathname = usePathname();

  return (
    <button className="px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700 cursor-pointer">
      Button
    </button>
  );
};
