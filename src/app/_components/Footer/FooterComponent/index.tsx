import type { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import { Footer } from '../../../../payload/payload-types';
import { ExternalNavBlock } from '../Nav';

type Props = PropsWithChildren & { footer: Footer };

export const FooterComponent: FC<Props> = ({ footer, children }) => {
  const customLinks = footer?.navItems || [].filter(({ link }) => link.type === 'custom');
  return (
    <footer className="bg-black">
      <div className="my-8 container">
        <nav className="flex items-center justify-between flex-wrap gap-x-2 gap-y-8">
          <Link href="/" className="w-[150px]">
            <picture>
              <Image
                className="w-full h-full object-contain"
                alt="Payload Logo"
                height={150}
                width={150}
                src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
              />
            </picture>
          </Link>
          {children}
        </nav>
        <Separator className="my-8 bg-[#27272a]" />
        <p className="text-sm tracking-wide text-gray-200 capitalize text-center mt-2">
          {footer.copyright}
        </p>

        <ExternalNavBlock navItems={customLinks} />
      </div>
    </footer>
  );
};
