import WhatsAppButton from "./Components/whatsapp";
import "./globals.css";

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
