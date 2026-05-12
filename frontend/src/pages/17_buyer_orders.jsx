import React from 'react';

export const pageMeta = {
  number: 17,
  title: 'Orders',
  route: '/buyer/orders',
  portal: 'Buyer Portal',
  doctypes: ['MIS Order'],
  sections: [
  'Order status tabs',
  'Orders table',
  'Order detail page',
  'Supplier info and order specs',
  'Status timeline and tracking number',
  'Download Invoice button'
],
};

export default function BuyerOrdersPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Buyer orders page manages purchase follow-up.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
