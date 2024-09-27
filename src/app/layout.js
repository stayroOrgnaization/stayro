import { ThemeProvider } from 'next-themes';
import "./globals.css";

export const metadata = {
  title: "styro",
  description: "styro frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
