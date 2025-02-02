import localFont from 'next/font/local'
import "./globals.css";
import ThemeProvider from './components/themeProvider';

const dmSans = localFont({
  src: [
    {
      path: '../../public/DMSans-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/DMSans-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    }
  ]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased min-h-fit`}
      >
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
