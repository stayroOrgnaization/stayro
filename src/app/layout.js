// app/layout.js
import "./Styles/globals.css";
import 'tailwindcss/tailwind.css';
import Head from "next/head";
import { Tajawal } from "next/font/google";

export const metadata = {
  title: "styro",
  description: "styro frontend",
};

const tajawal = Tajawal({
  weight: "400",
  subsets: ["arabic","latin"],
  variable: "--font-Tajawal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the Google Fonts link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={tajawal.className}>
        {/* Wrap the children with MobX Provider */}

          {children}

      </body>
    </html>
  );
}
