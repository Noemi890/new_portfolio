import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Noemi's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased text-gray-100 leading-normal tracking-wider bg-cover bg-[url('https://source.unsplash.com/1L71sPT5XKc')]`} >
        <div>{children}</div>
      </body>
    </html>
  );
}
