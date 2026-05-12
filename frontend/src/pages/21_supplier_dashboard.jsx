import React from 'react';

export const pageMeta = {
  number: 21,
  title: 'Supplier Dashboard',
  route: '/supplier/dashboard',
  portal: 'Supplier Portal',
  doctypes: ['MIS Supplier Profile', 'MIS RFQ', 'MIS Quotation', 'MIS Order', 'MIS Supplier Subscription'],
  sections: [
  'Supplier sidebar nav',
  'Company chip with verified badge',
  'Date range picker',
  'KPI row',
  'RFQ overview donut',
  'Quote performance line chart',
  'Profile Strength checklist',
  'Recent RFQs and orders tables',
  'Top Products Performance',
  'Unread messages',
  'Subscription Plan card'
],
};

export default function SupplierDashboardPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier dashboard summarizes manufacturer performance.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
