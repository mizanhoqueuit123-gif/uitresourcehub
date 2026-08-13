import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: { default: 'UIT Resource Hub', template: '%s | UIT Resource Hub' },
  description: 'Academic resources for University Institute of Technology, The University of Burdwan.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://uitresourcehub.pages.dev'),
  openGraph: { title: 'UIT Resource Hub', description: 'Find academic resources by branch, semester and subject.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>;
}
