import React from 'react';

export const pageMeta = {
  number: 23,
  title: 'RFQs Received',
  route: '/supplier/rfqs',
  portal: 'Supplier Portal',
  doctypes: ['MIS RFQ', 'MIS Quotation', 'MIS Buyer Profile'],
  sections: [
  'Status filter tabs',
  'RFQ table',
  'RFQ detail panel',
  'Buyer info and specs',
  'Attachments and delivery details',
  'Submit Quotation form',
  'Quote history'
],
};

export default function RfqsReceivedPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier RFQs page supports responding to buyer requests.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
