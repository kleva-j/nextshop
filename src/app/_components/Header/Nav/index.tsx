'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { Header as HeaderType } from '../../../../payload/payload-types';
import { useAuth } from '../../../_providers/Auth';
import { CartLink } from '../../CartLink';
import { CMSLink } from '../../Link';

import classes from './index.module.scss';

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || [];
  const { user } = useAuth();

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => (
        <Button asChild variant="link" className="font-normal px-0" key={i}>
          <Link href={link.url || ''}>{link.label}</Link>
        </Button>
      ))}
      {user && (
        <Button asChild variant="link" className="font-normal px-0">
          <Link href="/account">Account</Link>
        </Button>
      )}
      {!user && (
        <>
          <Button asChild className="">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="secondary" className="">
            <Link href="/create-account">Create Account</Link>
          </Button>
        </>
      )}
      {user && <CartLink />}
    </nav>
  );
};
