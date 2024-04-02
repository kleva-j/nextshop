import type { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = PropsWithChildren & {};

export const FooterComponent: FC<Props> = ({ children }) => {
  return (
    <footer className="py-8 bg-black">
      <nav className="container flex justify-between flex-wrap gap-x-2 gap-y-10">
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
    </footer>
  );
};
