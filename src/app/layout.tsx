import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Girlathon 2025 Pre-Events',
  description: 'Pre-event page for Girlathon 2025',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
