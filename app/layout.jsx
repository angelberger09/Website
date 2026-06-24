import "./globals.css";
import "./hero.css";
import "./typography.css";
import { AtmosphereLayer, SiteHeader, StudioFooter } from "./site-chrome";

export const metadata = {
  title: "Soft Strange Studio",
  description: "A public studio homepage for Soft Strange Studio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <AtmosphereLayer />
        {children}
        <StudioFooter />
      </body>
    </html>
  );
}
