"use client";
import { Nav10k } from "components/header";
import { ThemeProvider } from "next-themes";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ThemeProvider>
          <Nav10k />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
