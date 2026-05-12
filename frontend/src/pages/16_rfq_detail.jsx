import React from 'react';

export const pageMeta = {
  number: 16,
  title: 'RFQ Detail',
  route: '/buyer/rfqs/[id]',
  portal: 'Buyer Portal',
  doctypes: ['MIS RFQ', 'MIS Quotation', 'MIS Supplier Profile'],
  sections: [
  'RFQ summary card',
  'Received quotes list',
  'Compare Quotes action',
  'Side-by-side quote comparison',
  'Accept button per quote'
],
};

export default function RfqDetailPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>RFQ detail lets buyers compare supplier offers.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
