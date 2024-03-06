'use client';

import type { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { noHeaderFooterUrls } from '../../../constants';
import { Gutter } from '../../Gutter';

import classes from './index.module.scss';

type Props = PropsWithChildren & {};

const HeaderComponent: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href={'/'}>
          <Image src="/logo-black.svg" width={170} height={50} alt="logo" />
        </Link>
        {children}
      </Gutter>
    </nav>
  );
};

export default HeaderComponent;
