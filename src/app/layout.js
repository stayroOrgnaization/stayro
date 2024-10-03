// import { ThemeProvider } from 'next-themes';
import "./Styles/globals.css";
import Head from "next/head";
import {Tajawal} from "next/font/google";

export const metadata = {
  title: "styro",
  description: "styro frontend",
};


const tajawal = Tajawal({  weight: '400',
subsets: ['arabic'],
variable: '--font-Tajawal'});
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
        {children}
</body>

    </html>
  );
}