import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "styro",
  description: "styro frontend",
};

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
      <body>{children}</body>
    </html>
  );
}
