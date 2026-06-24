import "./globals.css";

export const metadata = {
  title: "Soft Strange Studio",
  description: "Cozy art, soft strange creatures, and tiny comfort objects by Angel Berger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
