import "./globals.scss";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Juan Israel",
  description: "My portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
