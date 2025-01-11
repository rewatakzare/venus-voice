import WhatsAppButton from "./Components/whatsapp";
import Linkedin from "./Components/linkedin";
import Facebook from "./Components/facebook";
import Instagram from "./Components/Instagram";
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
      <body>
        {children}
        <WhatsAppButton/>
        <Linkedin/>
        <Facebook/>
        <Instagram/>
      </body>
    </html>
  );
}