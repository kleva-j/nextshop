'use client';

import type { FC } from 'react';
import Link from 'next/link';

import { useAuth } from '@/app/_providers/Auth';
import { Button } from '@/components/ui/button';

import { Header } from '../../../../payload/payload-types';

export const MobileNav: FC<{ header: Header }> = ({ header }) => {
  const navItems = header?.navItems || [];
  const { user } = useAuth();

  return (
    <nav className="flex items-center flex-wrap gap-x-2">
      {navItems.map(({ link }, i) => (
        <Button key={i} variant="link" className="text-base font-normal px-2">
          {link.label}
        </Button>
      ))}
      <Button variant="link" className="text-base font-normal">
        Cart
      </Button>
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <Button
          className="rounded-none uppercase font-normal bg-gray-950 text-white"
          onClick={() => (window.location.href = '/login')}
        >
          Login
        </Button>
      )}
    </nav>
  );
};
