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
import './home-pillar-photo-pass.css';
import './home-check-photo-pass.css';
import './about-paper-collage-pass.css';
import './about-room-photo-pass.css';
import './about-contact-sheet-pass.css';
import './about-contact-sheet-rail-pass.css';
import './about-principle-photo-pass.css';
import './about-text-slip-pass.css';
import './about-direct-room-labels-pass.css';
import './about-pathway-photo-pass.css';
import './portfolio-paper-archive-pass.css';
import './portfolio-gallery-pass.css';
import './portfolio-archive-ticket-pass.css';
import './portfolio-feed-photo-ledger-pass.css';
import './portfolio-state-process-photo-pass.css';
import './portfolio-process-direct-labels-pass.css';
import './portfolio-continuity-photo-pass.css';
import './portfolio-readiness-photo-pass.css';
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
import './store-promise-photo-pass.css';
import './store-checklist-collage-pass.css';
import './store-path-photo-pass.css';
import './store-path-direct-labels-pass.css';
import './notes-paper-reader-pass.css';
import './notes-gallery-pass.css';
import './notes-direct-labels-pass.css';
import './notes-reader-photo-strip-pass.css';
import './notes-path-photo-board-pass.css';
import './notes-support-photo-slips-pass.css';
import './notes-source-receipts-pass.css';
import './notes-source-path-thread-pass.css';
import './notes-post-source-slip-pass.css';
import './notes-post-photo-card-pass.css';
import './notes-post-path-shelf-pass.css';
import './notes-post-receipt-strip-pass.css';
import './blog-path-bridge-pass.css';
import './blog-path-contact-cards-pass.css';
import './continuity-paper-trail-pass.css';
import './continuity-thread-pass.css';
import './page-intro-subtitle-pass.css';
import './page-intro-photo-card-pass.css';
import './page-intro-photo-labels-pass.css';
import './page-intro-copy-slip-pass.css';
import './page-intro-room-tags-pass.css';
import './page-intro-tag-photo-pass.css';
import './footer-paper-trail-pass.css';
import './page-intro-performance-pass.css';
import './home-entry-contact-sheet-pass.css';
import './performance-budget-pass.css';
import './root-paper-budget-pass.css';
import './continuity-photo-steps-pass.css';
import './home-room-status-photo-pass.css';
import './header-active-room-pass.css';
import './header-paper-labels-pass.css';
import './header-paper-thread-pass.css';
import './header-paper-edge-stamps-pass.css';
import './footer-studio-mark-photo-pass.css';
import './page-intro-foreground-card-pass.css';
import './home-left-docket-pass.css';
import './home-editorial-chapters-pass.css';
import './home-direct-path-labels-pass.css';
import './home-reading-path-rail-pass.css';
import './home-chapter-spine-notes-pass.css';
import './shared-paper-depth-pass.css';
import './page-intro-paper-desk-pass.css';
import './calm-structured-rooms-pass.css';
import './room-heading-ribbons-pass.css';
import './page-intro-room-rhythm-pass.css';
import { AtmosphereLayer, SiteHeader, StudioFooter } from './site-chrome';

export const metadata = {
  title: 'Soft Strange Studio',
  description: 'A public studio homepage for Soft Strange Studio.'
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
