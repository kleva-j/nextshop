import { Footer } from '../../../payload/payload-types';
import { fetchFooter } from '../../_api/fetchGlobals';

import { FooterComponent } from './FooterComponent';
import { FooterNav } from './Nav';

export async function Footer() {
  let footer: Footer | null = null;

  try {
    footer = await fetchFooter();
  } catch (error) {
    console.error(error);
  }

  return (
    <FooterComponent>
      <FooterNav footer={footer} />
    </FooterComponent>
  );
}
