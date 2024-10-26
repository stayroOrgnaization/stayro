import "./Styles/globals.css";
// import 'tailwindcss/tailwind.css';
import { Tajawal } from "next/font/google";

export const metadata = {
  title: "styro",
  description: "styro frontend",
};

const tajawal = Tajawal({
  weight: ["400","500","700"],
  subsets: ["arabic", "latin"],
  variable: "--font-Tajawal",
});

export default function RootLayout({ children }) {
  return (
    <html >
      <body className={tajawal.className}>
        {children}
      </body>
    </html>
  );
}
