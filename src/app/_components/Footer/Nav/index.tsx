import type { FC } from 'react';
import Link from 'next/link';

import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';

import { Footer } from '../../../../payload/payload-types';

export const FooterNav: FC<{ footer: Footer }> = ({ footer }) => {
  const links = footer?.navItems || [];

  return (
    <div className="flex items-center flex-wrap opacity-100 gap-x-4 gap-y-3 transition-opacity">
      <ToggleTheme />
      {links.map(({ link }, i) => (
        <Button
          variant="link"
          className="font-normal px-0 text-sm text-white hover:underline"
          key={i}
          asChild
        >
          <Link href={link.url || ''}>{link.label}</Link>
        </Button>
      ))}
      <Link
        href="/admin"
        className="underline-offset-4 text-sm text-[13px] text-white hover:underline"
      >
        Admin
      </Link>
      <Link
        href="https://github.com/payloadcms/payload/tree/main/templates/ecommerce"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 text-sm text-white text-[13px] hover:underline"
      >
        Source Code
      </Link>
      <Link
        href="https://payloadcms.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 text-sm text-white text-[13px] hover:underline"
      >
        Payload
      </Link>
    </div>
  );
};
