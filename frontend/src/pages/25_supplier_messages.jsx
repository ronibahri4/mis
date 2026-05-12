import React from 'react';

export const pageMeta = {
  number: 25,
  title: 'Messages — Supplier',
  route: '/supplier/messages',
  portal: 'Supplier Portal',
  doctypes: ['MIS Message Thread', 'MIS Message'],
  sections: [
  'Buyer thread list',
  'RFQ reference labels',
  'Message bubbles',
  'Attachment chips',
  'Input bar'
],
};

export default function SupplierMessagesPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier messaging mirrors buyer messaging around RFQs.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
