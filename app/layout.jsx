import "./globals.css";
import "./home-gemini-reference-pass.css";
import { SiteHeader, StudioFooter } from "./site-chrome";

export const metadata = {
  title: "Soft Strange Studio",
  description: "A cozy public studio for strange art, honest notes, and small comforts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <StudioFooter />
      </body>
    </html>
  );
}
