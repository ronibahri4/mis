import React from 'react';

export const pageMeta = {
  number: 6,
  title: 'Product Page',
  route: '/products/[slug]',
  portal: 'Public Portal',
  doctypes: ['MIS Product', 'MIS Supplier Profile', 'MIS Review'],
  sections: [
  'Breadcrumb',
  'Image gallery with thumbnails, zoom, counter',
  'Product title and verified badge',
  'Specifications table',
  'Description/specs/applications/packaging/certificates/FAQ/reviews tabs',
  'Download Brochure and Add to Compare',
  'RFQ sidebar form',
  'Supplier information block',
  'Response time and supplier checklist',
  'Related products carousel'
],
};

export default function ProductPagePage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Product page combines specifications, supplier trust, and RFQ submission.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
