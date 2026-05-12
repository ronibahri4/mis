import React from 'react';

export const pageMeta = {
  number: 24,
  title: 'Orders Received',
  route: '/supplier/orders',
  portal: 'Supplier Portal',
  doctypes: ['MIS Order', 'MIS Buyer Profile'],
  sections: [
  'Order status tabs',
  'Orders table',
  'Order detail',
  'Buyer contact info and specs',
  'Payment status',
  'Update Status dropdown',
  'Tracking Number and Carrier inputs',
  'Generate Invoice button'
],
};

export default function OrdersReceivedPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier orders page manages fulfillment.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
