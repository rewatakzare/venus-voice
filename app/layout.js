import WhatsAppButton from "./Components/whatsapp";
import "./globals.css";

export const metadata = {
  title: 'Venus Voice',
  description: '',
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}
