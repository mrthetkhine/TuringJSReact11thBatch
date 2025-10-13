'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {queryClient} from "@/lib/hooks/queryClient";
import {QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import {Nav} from "@/app/components/Nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [qClient] = React.useState(() => queryClient);
  return (
    <html lang="en">
    <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={qClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <section>
            <Nav />

            {children}
          </section>

        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>

    </html>
  );
}
