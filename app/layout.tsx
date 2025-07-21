import './globals.css';
import { Providers } from './providers';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux FormInput & DisplayNama App by Ricky Indra Gunawan",
  description: "Tugas Keenam Next.js Advanced with Redux by Ricky Indra Gunawan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}