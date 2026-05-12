import React from 'react';

export const pageMeta = {
  number: 26,
  title: 'Analytics',
  route: '/supplier/analytics',
  portal: 'Supplier Portal',
  doctypes: ['MIS Supplier Profile', 'MIS Product', 'MIS RFQ', 'MIS Order'],
  sections: [
  'Profile Views line chart',
  'Date range filter',
  'Product Performance sortable table',
  'RFQ conversion funnel',
  'Revenue by month bar chart',
  'Export Markets pie chart'
],
};

export default function AnalyticsPage() {
  return (
    <article className="page-file" data-route={pageMeta.route}>
      <p className="eyebrow">{pageMeta.portal} · Page {pageMeta.number}</p>
      <h1>{pageMeta.title}</h1>
      <p>Supplier analytics shows performance and conversion trends.</p>
      <ul>
        {pageMeta.sections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
      <p><strong>DocTypes:</strong> {pageMeta.doctypes.length ? pageMeta.doctypes.join(', ') : 'Static / Frappe endpoint'}</p>
    </article>
  );
}
