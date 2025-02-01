import localFont from 'next/font/local'
import "./globals.css";

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
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
