import "./globals.css";
import "./hero.css";
import "./typography.css";

export const metadata = {
  title: "Soft Strange Studio",
  description: "A public studio homepage for Angel Berger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
