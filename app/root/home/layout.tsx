import { Metadata } from 'next';
import { ReactNode } from 'react';
import SmallFooter from '@/components/SmallFooter';

import Sidebar from '@/components/Sidebar';


export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'Instagram Clone',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="flex overflow-x-hidden">

      <Sidebar />
        
      <section className=' w-full flex justify-center section-margin'>
        {children}
      </section>

      <SmallFooter />

    </main>
  );
};

export default RootLayout;
