import React from 'react';

export const pageMeta = {
  number: 15,
  title: 'My RFQs',
  route: '/buyer/rfqs',
  portal: 'Buyer Portal',
  doctypes: ['MIS RFQ'],
  sections: [
  'Status filter tabs',
  'RFQ list table',
  'Title/category/responses/status/updated columns',
  'View button and detail navigation'
],
};

export default function MyRfqsPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>My RFQs tracks all buyer requests.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
