import './globals.css';
import './hero.css';
import './typography.css';
import './paper-card-pass.css';
import './paper-header-pass.css';
import './header-paper-tabs-pass.css';
import './root-paper-pass.css';
import './home-paper-collage-pass.css';
import './home-highlight-photo-pass.css';
import './home-intro-copy-slips-pass.css';
import './about-paper-collage-pass.css';
import './about-contact-sheet-pass.css';
import './about-text-slip-pass.css';
import './about-direct-room-labels-pass.css';
import './about-pathway-photo-pass.css';
import './portfolio-paper-archive-pass.css';
import './portfolio-gallery-pass.css';
import './portfolio-archive-ticket-pass.css';
import './store-paper-snippet-pass.css';
import './store-entry-receipts-pass.css';
import './store-preview-collage-pass.css';
import './store-gallery-pass.css';
import './store-hierarchy-pass.css';
import './store-feed-contract-pass.css';
import './store-availability-board-pass.css';
import './store-availability-status-pass.css';
import './store-lane-collage-pass.css';
import './store-promise-collage-pass.css';
import './store-checklist-collage-pass.css';
import './notes-paper-reader-pass.css';
import './notes-gallery-pass.css';
import './notes-reader-photo-strip-pass.css';
import './notes-post-source-slip-pass.css';
import './notes-post-photo-card-pass.css';
import './notes-post-path-shelf-pass.css';
import './notes-post-receipt-strip-pass.css';
import './blog-path-bridge-pass.css';
import './continuity-paper-trail-pass.css';
import './continuity-thread-pass.css';
import './page-intro-subtitle-pass.css';
import './page-intro-photo-card-pass.css';
import './page-intro-copy-slip-pass.css';
import './page-intro-room-tags-pass.css';
import './footer-paper-trail-pass.css';
import './page-intro-performance-pass.css';
import './home-entry-contact-sheet-pass.css';
import './performance-budget-pass.css';
import './root-paper-budget-pass.css';
import './header-active-room-pass.css';
import { AtmosphereLayer, SiteHeader, StudioFooter } from './site-chrome';

export const metadata = {
  title: 'Soft Strange Studio',
  description: 'A public studio homepage for Soft Strange Studio.'
};

export default function RootLayout({ children }) {
  return <html lang='en'><body><SiteHeader /><AtmosphereLayer />{children}<StudioFooter /></body></html>;
}
