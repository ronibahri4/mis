import React from 'react';

export const pageMeta = {
  number: 4,
  title: 'Supplier Listing',
  route: '/suppliers',
  portal: 'Public Portal',
  doctypes: ['MIS Supplier Profile'],
  sections: [
  'Header and filter bar',
  'Supplier cards with cover, logo, badges, metrics, rating, actions',
  'Featured Manufacturers section',
  'Trust bar',
  'CTA banner for Submit RFQ / Learn More'
],
};

export default function SupplierListingPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier listing supports browsing and contacting manufacturers.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
