import './globals.css';
import './hero.css';
import './typography.css';
import './paper-card-pass.css';
import './paper-header-pass.css';
import './header-paper-tabs-pass.css';
import './root-paper-pass.css';
import './store-paper-snippet-pass.css';
import './store-hierarchy-pass.css';
import './store-feed-contract-pass.css';
import { AtmosphereLayer, SiteHeader, StudioFooter } from './site-chrome';

export const metadata = {
  title: 'Soft Strange Studio',
  description: 'A public studio homepage for Soft Strange Studio.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <SiteHeader />
        <AtmosphereLayer />
        {children}
        <StudioFooter />
      </body>
    </html>
  );
}
