'use client';

import React, { type FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { useCart } from '../../_providers/Cart';

export const CartLink: FC<{ className?: string }> = props => {
  const { cart } = useCart();
  const [length, setLength] = useState<number>();

  useEffect(() => {
    setLength(cart?.items?.length || 0);
  }, [cart]);

  return (
    <Button variant="link" className={cn('relative px-0 font-normal', props.className)} asChild>
      <Link href="/cart">
        Cart
        {typeof length === 'number' && length > 0 && (
          <small className="absolute inline-flex items-center justify-center h-5 w-5 text-xs font-medium text-white bg-gray-900 border-white rounded-full -top-1.5 -end-4">
            {4}
          </small>
        )}
      </Link>
    </Button>
  );
};
