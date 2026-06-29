import './globals.css';
import './hero.css';
import './typography.css';
import './paper-card-pass.css';
import './master-convergence-pass.css';

export const metadata = {
  title: 'Soft Strange Studio',
  description: 'A quiet, soft-strange studio space for art, notes, projects, and future shop paths.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
