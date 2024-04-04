import type { FC } from 'react';
import { Facebook, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';

import { Footer } from '../../../../payload/payload-types';

const iconMap = {
  Facebook: { name: 'Facebook', icon: Facebook },
  Instagram: { name: 'Instagram', icon: Instagram },
  Github: { name: 'Github', icon: Github },
};

export const FooterNav: FC = () => {
  return (
    <div className="flex items-center flex-wrap opacity-100 gap-x-4 gap-y-3 transition-opacity">
      <ToggleTheme />
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

export const ExternalNavBlock: FC<{ navItems: Footer['navItems'] }> = ({ navItems }) => {
  return (
    <div className="flex items-center gap-x-2 mx-auto w-min mt-4">
      {navItems.map(({ link }, i) => {
        const Icon = iconMap[link.label].icon;
        return (
          <Button
            key={i}
            className="w-6 h-6 font-normal px-0 text-sm text-white bg-[#18181b] hover:bg-[#18181b]/90"
            asChild
          >
            <Link href={link.url || ''} title={link.label}>
              {Icon && <Icon className="h-4 w-4" />}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};
